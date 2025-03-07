import { useState } from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
const Screen1 = ({ navigation }) => {
  const buttonPressed = () => {
    navigation.navigate("Screen 2", {airplaneModeState: AirplaneModeFromUI, airplaneName: "Boeing 747"});
  };
  const buttonPressed2 = () => {
    console.log("AIRPLANE MODE---------------:" + AirplaneModeFromUI);
    if (AirplaneModeFromUI == false) {
      alert("airplane mode off");
    } else {
      alert("airplane mode on!!");
    }
  };
  const [AirplaneModeFromUI, setAirplaneModeFromUI] = useState(false);
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button title="Go to next" onPress={buttonPressed} />
      <Text>Airplane mode: </Text>
      <Switch
        value={AirplaneModeFromUI}
        onValueChange={(newVal)=>{
            setAirplaneModeFromUI(newVal)
            console.log("AIRPLANE MODE---------------:" + newVal);

        }}
      />
      <Button title="click meee!" onPress={buttonPressed2} />
      {AirplaneModeFromUI && <Text>HEYEYYEYEYEYE</Text>}
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

export default Screen1;
