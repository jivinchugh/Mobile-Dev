import { StyleSheet, Text, View, Button } from 'react-native';
const Screen1 = ({navigation}) => {
  
   const buttonPressed = () => {
       navigation.navigate("HOMEEEEEEE")
   }
   return(
       <View>
           <Text>This is screen 1</Text>
           <Button title="Go to next" onPress={buttonPressed}/>
       </View>
   )
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
});


export default Screen1