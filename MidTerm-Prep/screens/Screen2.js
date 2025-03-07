import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const Screen2 = () => {
    const [count, setCount] = useState(0);
  const buttonPressed = () => {
    const friends = ["Jivin", "Jash", "Priyanka", "Deepak", "Rahul", "Rohit", "Sahil"];
    const randomPosition = Math.floor(Math.random() * friends.length + 0);
    setDisplayName(friends[randomPosition]);
    setCount(count + 1);
    console.log("new = "+ count);
  };
  const [displayName, setDisplayName] = useState("");

  return (
    <View>
      <Text>This is screen 2</Text>
      <Button title="random friend" onPress={buttonPressed} />
      <Text>{displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen2;
