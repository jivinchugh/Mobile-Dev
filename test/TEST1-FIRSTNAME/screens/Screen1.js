import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import listData from "../modules/common.js";
export default function Screen1({ navigation }) {
  const [amount, amountFromUI] = useState("");
  const [name, nameFromUI] = useState("");
  const [deposit, setdepositFromUI] = useState(false);

  

  const buttonPressed = () => {
    alert("Saved");
    console.log("Passing Vars...");
    console.log("amount is " + amount);
    console.log("name is" + name);
    console.log("deposit dne?" + deposit);
    let randomOrder = Math.floor(Math.random() * 900) + 100;
    if (deposit){
      randomOrder="D-"+randomOrder
    }
    if(!deposit){
      randomOrder="E-"+randomOrder
    }
    
    listData.push({
      id: randomOrder,
      name: name,
      amount: amount,
      deposit: deposit,
    });
    let output2 = "";
    for (let i = 0; i < listData.length; i++) {
      output2 += `Name${[i]} is: ${listData[i].name}, id is ${
        listData[i].id
      }, amount is ${listData[i].id}, deposit is ${listData[i].deposit} \n`;
    }
    console.log(output2);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        style={styles.valuebox}
        value={name}
        onChangeText={nameFromUI}
        placeholder="Enter name"
      />
      <Text style={styles.text}>Amount:</Text>
      <TextInput
        style={styles.valuebox}
        value={amount}
        onChangeText={amountFromUI}
        placeholder="Enter amount"
      />
      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.caltext,
            { marginTop: 0, fontSize: 17, fontWeight: "normal" },
          ]}
        >
          Is this a deposit?
        </Text>
        <Switch
          style={{ justifyContent: "space-between" }}
          value={deposit}
          onValueChange={setdepositFromUI}
        />
      </View>
      <Pressable style={styles.btn} onPress={buttonPressed}>
        <Text style={styles.btnText}>Add Item</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  btn: {
    borderWidth: 1,
    backgroundColor: "black",
    borderRadius: 20,
    paddingVertical: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  valuebox: {
    width: 350,
    height: 35,
    borderColor: "black",
    marginVertical: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
    marginVertical: 8,
  },
});
