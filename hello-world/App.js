import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Text-size */}
      <Text style={{fontSize:30}}>Hello World!</Text>
      <Text style={{fontSize:20}}>Hello World!</Text>
      <Text style={{fontSize:50}}>Hello World!</Text>
      
      {/* Text-style */}
      <Text style={{fontSize:30, fontWeight:"bold"}}>Hello World! - bold</Text>
      <Text style={{fontSize:30, fontStyle:"italic"}}>Hello World! - italic</Text>
      <Text style={{fontSize:30, textDecorationLine:"underline"}}>Hello World!</Text>
      
      {/* Text-color */}
      <Text style={{fontSize:30, color:"blue"}}>Hello World!</Text>
      <Text style={{fontSize:30, color:"#00FF00"}}>Hello World!</Text>
      <Text style={{fontSize:30, backgroundColor:"grey"}}>Hello World!</Text>
      
      {/* Text-borders */}
      <Text style={{fontSize:30, borderWidth:1}}>Hello World!</Text>
      <Text style={{fontSize:30, borderWidth:5, borderColor:"green"}}>Hello World!</Text>
      <Text style={{fontSize:30, borderWidth:5, borderColor:"green", borderStyle:"dotted"}}>Hello World!</Text>

      {/* Text-padding */}
      <Text style={{fontSize:30, borderWidth:5, padding:20, borderColor:"green"}}>Hello World!</Text>

       {/* Text-margin */}
      <Text style={{fontSize:30, borderWidth:5, marginTop:20, borderColor:"green"}}>Hello World!</Text>
      
      {/* Text in a row */}
      <View style={{flexDirection:"row"}}>
        <Text>hello        </Text>
        <Text>hello           </Text>
        <Text>hello</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
