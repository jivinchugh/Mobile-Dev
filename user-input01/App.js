import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
 // click handler for the button
 const buttonPressed = () => {
   console.log("button working")   
 }

 return (
   <View style={styles.container}>
     <Text style={[styles.heading, {marginTop:60}]}>User Input and Output</Text>
     <Text style={styles.text}>Press the button to see output:</Text>
     <Button onPress={buttonPressed} title="Click Me!"/>          
     <Text style={styles.text}></Text>
   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   //marginTop:60,   
 },
 heading: {
   fontSize:20, 
   marginVertical:8, 
   textAlign:"center",
 },
 text: {
   fontSize:16,
   marginVertical:8,
   textAlign:"center"
 }
});
