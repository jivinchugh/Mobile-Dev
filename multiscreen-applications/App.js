import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* tells your app that we have a multi-screen app
     screens will be connected using the stack pattern  */}
      <Tab.Navigator 
       initialRouteName="Home"
       screenOptions={() => ({
        headerRight:() => {
          return(
                    <View style={{flexDirection:"row", alignItems:"center"}}>               
                       <Text>Hello!</Text>
                    </View>
                 )
        },
        headerLeft:() => {
          return(
                    <View style={{flexDirection:"row", alignItems:"center"}}>               
                       <Text>Goodbye!</Text>
                    </View>
                 )}
        
        
        })}>

        {/* here is a list of the screens that you want connected in a stack */}
        {/* 1. name is used to "identify" the screen programmatically (route)
            2. this will get displayed at the top of your screen
            3. It can be used to set the initial screen of the app */}
        <Tab.Screen name="Home" component={Screen2} />
        <Tab.Screen name="Details" component={Screen3} />
        <Tab.Screen name="LoginScreen" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
