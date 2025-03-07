import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Tab.Navigator initialRouteName="Screen 1">
       <Tab.Screen name="Screen 1" component={Screen1} />
       <Tab.Screen name="HOMEEEEEEE" component={Screen2} />
     </Tab.Navigator>
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
