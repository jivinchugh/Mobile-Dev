import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "./screens/Menu";
import ReceiptScreen from "./screens/Receipt";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NANDO's">
        <Stack.Screen name="NANDO's" component={MenuScreen}
         options={() => ({          
          headerTintColor:"black",
          headerStyle:{backgroundColor: "#ff6b6b"},     
          })}/>
        <Stack.Screen name="RECEIPT" component={ReceiptScreen}
         options={() => ({          
          headerTintColor:"black",
          headerStyle:{backgroundColor: "#ff6b6b"},     
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
