import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState("")
  const [showText, setShowText] = useState(false)
  const buttonpressed = () => {

    const Input=parseInt(name)
    if(Input>20){
      alert("Input is greater than 20")
      setShowText(true)
    }
    else{
      alert("Input is less than 20")
      setShowText(false)
    }

  };






  return (
    <View style={styles.container}>
      <Text>Conditional!!</Text>
      <TextInput
      style={{width: 300, height:40, borderColor: 'gray', borderWidth: 1}}
      value={name}
      onChangeText={setName}
      placeholder='Enter your name'
      />
      <Button title='getName' onPress={buttonpressed} />

      {
        (showText) && 
        <Text style={{fontSize: 20, color: 'red'}}>This is a text</Text> 
      }


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
