import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
 return (
   <View style={[styles.container, {justifyContent:"center", alignItems:"center", gap:10}]}>
     <Image
       source={require("./assets/shape04.png")}
       style={{width:200, height:200}}
     />
     <Text style={{fontSize:40, fontWeight:"bold"}}>Welcome</Text>
     <Text style={{fontSize:20, fontStyle:"italic"}}>We are not so glad that you are here</Text>
   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff200",
   borderWidth:1,
   borderColor:"green",    
   marginTop:60,
 },
 centered: {
   // textAlign:"center"
 }
});


