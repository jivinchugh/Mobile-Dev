import { StyleSheet, Text, View } from "react-native";


import "react-native-gesture-handler";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";




const Stack = createStackNavigator();


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home Screen">
       <Stack.Screen name="Home Screen" component={Screen1} />
       <Stack.Screen name="Screen 2" component={Screen2} />
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
