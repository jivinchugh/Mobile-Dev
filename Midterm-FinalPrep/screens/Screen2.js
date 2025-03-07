import { StyleSheet, Text, View } from 'react-native';
const Screen2 = ({route}) => {
    const {airplaneModeState, airplaneName} = route.params;
    const finalMode = route.params.airplaneModeState;
  
   return(
       <View>
           <Text>This is screen 2</Text>
           <Text>airplane mode?? { airplaneModeState  ? <Text>ONNN! Airplane Name {airplaneName}</Text>: <Text>OFFF</Text>}</Text>
           <Text>{finalMode? "ON":"OFF"}</Text>
       
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


export default Screen2

