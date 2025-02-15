import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {

  //list of data = Javascript array
  const studentList = [
    {name:"Peter", gpa:3.0, tuitionPaid:true, userid:"psmith"},
    {name:"Emily Patel", gpa:4.0, tuitionPaid:true, userid:"epatel"},
    {name:"Suzy Lee", gpa:2.5, tuitionPaid:false, userid:"slee"},
    {name:"Peter", gpa:2.5, tuitionPaid:false, userid:"pdiaz"}, 
   ]

   const btnPressed = (item)=>{
    console.log("Received", item)
    alert("Button pressed for: " + item.name)
  }

   
  return (
    <View style={styles.container}>
      <Text>Student List: </Text>
      <FlatList
        style={{ borderWidth: 1 }}
        data={studentList}
        //keyExtractor is a function that returns a unique key for each item in the array
        keyExtractor={(item) => { return item.userid }}
        ItemSeparatorComponent={
          ()=>{
            return (             
              <View style={{borderWidth:0.8, marginVertical:10}}></View>
            )
          }
        }
 
         
        //controls appearance of each row in the list
        renderItem={
          ({ item }) => {
            return (
              <Pressable onPress={()=>{btnPressed(item)}}>
              <View style={{ borderWidth: 1, margin: 5, flexDirection:"row", justifyContent:"space-between" }}>
              <Text>{item.name} {item.gpa}</Text>
              <Button onPress={()=>{btnPressed(item)}} title="Click!!"/>
              </View>
              </Pressable>
            )
          }
        }
      />
      <Text>FlatList demo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: 50,
    padding:20,
  },
});
