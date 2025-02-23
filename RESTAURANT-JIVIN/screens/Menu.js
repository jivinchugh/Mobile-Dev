import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Switch,
} from "react-native";
import { Image } from "react-native";
import React, { useState } from "react";

// navigation is a prop that is included on every screen in teh Stack
// it comes from React Navigation library
// Contain functions and variables that help you do navigation
const Screen2 = ({ navigation }) => {
  const buttonPressed = () => {
    if (quantity == "") {
      alert("Please enter a quantity.");
      return;
    }
    if (quantity <= 0) {
      alert("Please enter a valid quantity \n (greater than 0)");
      return;
    }
    if (isNaN(quantity)) {
      alert("Quantity must be a number.");
      return;
    }
    if (quantity.includes(".")) {
      alert("Please enter a whole number.");
      return;
    }

    console.log("Generating receipt...");
    const input = quantity;
    console.log("quantity is " + quantity);
    console.log("avocado " + avocado);
    console.log("utensils " + utensils);
    navigation.navigate("RECEIPT", {
      qty: input,
      avocado: avocado,
      utensils: utensils,
    });
  };

  const buttonPressed2 = () => {
    alert("Order Reset");
    quantityFromUI("");
    setAvocadoFromUI(false);
    setutensilsFromUI(false);
  };

  const [quantity, quantityFromUI] = useState("");
  const [avocado, setAvocadoFromUI] = useState(false);
  const [utensils, setutensilsFromUI] = useState(false);

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={require("../assets/sandwich.png")} style={styles.image} />

      {/* Title, Price & Description */}
      <Text style={styles.title}>Nandoca's Choice</Text>
      <Text
        style={{
          alignSelf: "left",
          paddingHorizontal: 10,
          fontSize: 18,
          marginTop: 2,
          marginVertical: 12,
          fontWeight: 700,
        }}
      >
        $14.99
      </Text>
      <Text style={styles.description}>
        Our flame-grilled PERi-PERi chicken breast served with arugula, pickled
        red onions, tomato and PERinaise on a traditional Portuguese roll.
      </Text>

      {/* Quantity */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          alignSelf: "left",
        }}
      >
        <Text
          style={{
            alignSelf: "left",
            paddingHorizontal: 10,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Quantity:
        </Text>
        <TextInput
          style={styles.quantitybox}
          value={quantity}
          onChangeText={quantityFromUI}
          placeholder="Enter quantity"
        />
      </View>

      {/* extra add-ons */}
      <Text style={[styles.caltext, { alignSelf: "left" }]}>
        Extra Add-ons:
      </Text>

      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.caltext,
            { marginTop: 0, fontSize: 17, fontWeight: "normal" },
          ]}
        >
          Avocado (+$2.00)
        </Text>
        <Switch
          style={{ justifyContent: "space-between" }}
          value={avocado}
          onValueChange={setAvocadoFromUI}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.caltext,
            { marginTop: 0, fontSize: 17, fontWeight: "normal" },
          ]}
        >
          Utensils (+$0.50)
        </Text>
        <Switch
          style={{ alignSelf: "right" }}
          value={utensils}
          onValueChange={setutensilsFromUI}
        />
      </View>

      {/* Buttons */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
          alignSelf: "left",
        }}
      >
        <Pressable style={styles.pressable} onPress={buttonPressed2}>
          <Text style={styles.pressableText}>RESET ORDER</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={buttonPressed}>
          <Text style={styles.pressableText}>PLACE ORDER</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  image: {
    width: 350,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "left",
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 17,
    alignSelf: "left",
    paddingHorizontal: 10,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  caltext: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  quantitybox: {
    width: 242,
    height: 35,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  pressable: {
    backgroundColor: "#ff6b6b",
    width: 165,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  pressableText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
    marginTop: 8,
  },
});

export default Screen2;
