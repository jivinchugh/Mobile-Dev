import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";

export default Screen2 = () => {
  // state variable
  const [nameToDisplay, setNameToDisplay] = useState("");
  // life cycle functions on screen #2

  // 1. MOUNTING: This lifecycle function executes when app requests this screen to appear on the device
  useEffect(() => {
    // code you want to execute when the mounting phase occurs
    console.log("+++ SCREEN2 is MOUNTING");
  }, []);

  // 3. UNMOUNT: This function executes when the screen is no longer needed (when the screen disappears)
  useEffect(() => {
    return () => {
      // code you want to execute when the unmounting phase occurs.
      console.log("+++ SCREEN2 is UNMOUNTING");
    };
  }, []);

  // 4. UseIsFocused
  const screenIsActive = useIsFocused();

  useEffect(() => {
    console.log(
      `+++ SCREEN2: USEISFOCUSED executing.  Is user on Screen 2? ${screenIsActive}`
    );
  }, [screenIsActive]);

  const btnPressed = () => {
    // When button pressed, pick a random friend from the array and display it on the screen
    const friends = ["Abby", "Bobby", "Carlos", "Diego", "Emily", "Francis"];
    const randomPosition = Math.floor(Math.random() * friends.length + 0);
    setNameToDisplay(friends[randomPosition]);
  };

  const [luckyNumber, setLuckyNumber] = useState(1);

  const btnPressed2 = () => {
    const num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    setLuckyNumber(num);
  };

  // 2. UPDATE: This executes when ANY state variable changes
  useEffect(() => {
    console.log(
      "++++ SCREEN2: Update phase. Something on the screen has changed."
    );
  });
  // Will execute every time luckyNumber state variable updates
  useEffect(() => {
    console.log(
      "++++ SCREEN2: Update phase. Lucky number state variable changed."
    );
  }, [luckyNumber]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Screen 2</Text>
      <Text style={styles.text}>{nameToDisplay}</Text>
      <Button onPress={btnPressed} title="Click Me" />
      <Button onPress={btnPressed2} title="Get Lucky Number" />
      {luckyNumber > 5 ? (
        <Text style={styles.text}>You win! {luckyNumber}</Text>
      ) : (
        <Text style={styles.text}>You Lose! {luckyNumber}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headingText: {
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
  },
});
