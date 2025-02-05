import { StyleSheet, Text, View, Button, Pressable, TextInput, Switch } from 'react-native';
import { useState } from 'react';

export default function App() {

  //create state variable
  //variable needs name
  //variable needs initial value
  //const msg - "hello" 
  const [msg, setMsg] = useState("hello")
  //msg - name of state variable
  //setMsg - function to update the state variable

  const [readingrate, finalreadingrate] = useState("")


  const [airplanemode, setAirplanemode] = useState(false)


  // click handler for the button
  const buttonPressed = () => {
    console.log("native button working")

    const randomvalue = Math.floor(Math.random() * (200 - 5 + 1) + 5)
    setMsg("Random value is: " + randomvalue)
  }
  // click handler for pressable
  const buttonPressed2 = () => {
    alert("Pressable button working!!")
  }

  const buttonPressed3 = () => {
    const book = {
      // 1. creating an object literal
      title: "Harry Potter",
      author: "JK Rowling",
      pages: 223
    }
    // 2. calculate the reading rate
    // 3 page per minute
    // num pages / page per minute = minuets
    const minutes = book.pages / 3
    console.log("Reading rate button clicked: " + minutes)
    // 3. output
    finalreadingrate(
      <Text>
        <Text style={styles.highlight}>{book.title}</Text> by{" "}
        <Text style={styles.highlight}>{book.author}</Text> has{" "}
        <Text style={styles.highlight}>{book.pages}</Text> pages and will take{" "}
        <Text style={styles.highlight}>{minutes}</Text> minutes to read.
      </Text>
    );
  }


  const [namefromUI, setnamefromUI] = useState("")
  const getName = () => {
    alert("Name entered is: " + namefromUI + "\nAirplane mode is: " + airplanemode)
    setnamefromUI("") //to make sure it gets empty after alert
    setAirplanemode(false)
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { marginTop: 60 }]}>User Input and Output</Text>

      {/* need to be attached to a state variable */}
      <TextInput 
      style={[styles.text, { borderWidth: 1, borderColor: "black", paddingVertical: 8, marginHorizontal: 10, fontSize: 20 }]} 
      value={namefromUI} 
      onChangeText={setnamefromUI}
      placeholder='Enter your name'
      keyboardType='default' //can be set to numeric in places to enter a phone number
      />
      <Button title='Get Name' onPress={(getName)}>

      </Button>


      <Text style={styles.text}>Press the button to see output:</Text>
      <Button onPress={buttonPressed} title="Click Me!" />
      <Text style={styles.text}>
        {msg}
      </Text>

      <Text style={styles.text}>Pressable button here</Text>
      <Pressable style={{ borderWidth: 1, borderColor: "black", paddingVertical: 2, paddingHorizontal: 1, marginHorizontal: 120 }} onPress={buttonPressed2}>
        <Text style={[styles.text, { color: "blue" }]}>Pressable Button</Text>
      </Pressable>

      <Button 
      onPress={buttonPressed3} 
      title="Calculate reading rate!"
      style={{backgroundColor:"yellow", fontSize:20, borderWidth:5}} />
      <Text style={styles.text}>
        {readingrate}
      </Text>


      
      <Text>Turn Airplane mode on?</Text>
      <Switch value={airplanemode} onValueChange={setAirplanemode} />


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
    fontSize: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: "center"
  },
  highlight: {
    fontWeight: "bold",
    backgroundColor: "yellow"
  }
});
