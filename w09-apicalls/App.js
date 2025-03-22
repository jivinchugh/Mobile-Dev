import { StyleSheet, Text, View, FlatList, Image  } from 'react-native';
import {useEffect, useState} from "react"

export default function App() {
 // state varialble to store the items that you want to show in the list
 const [listData, setListData] = useState([])
 // const [doneLoading, setDoneLoading] = useState(false)
 useEffect(()=>{
   console.log("DEBUG: Screen is loading..")
   getAPIData()
 },[])

 // helper function
 const getAPIData = async () => {
   const URL =  "https://randomuser.me/api/?results=12"
   const response = await fetch(URL);
   const data = await response.json()
   console.log(data)
   // data = {results:[{...}], info:{}}
   // extract the array from the api data
   const {results} = data
   // const results = data.results
   console.log(`How many users are there? ${results.length}`)
   // save it to the state variable
   setListData([...results])
   // // after all data is loaded, then set the doneLoading to true
   // setDoneLoading(true)
 }

 return (
   <View style={styles.container}>
     <Text style={styles.header}>Demo of API</Text>
     {
       (listData.length === 0)
         ?
         <Text style={styles.header}>Screen is loading...</Text>
         :
         <FlatList
         style={styles.list}
         data={listData}
         keyExtractor={(item)=>{ return item.login.uuid }}
         ItemSeparatorComponent={
           ()=>{
             return(
               <View style={styles.divider}></View>
           )
           }
         }
         renderItem={
         ({item})=>{
               return(
                 <View style={styles.rowContainer}>
                     <Image source={{uri: item.picture.large}} style={styles.profilePic}/>
                     <View>
                       <Text style={styles.text}>{item.name.first} {item.name.last}</Text>
                       <Text style={styles.text}>
                         {item.location.city}, {item.location.country}</Text>
                       <Text style={styles.text}>
                       Age: {item.dob.age}
                       </Text>        
                     </View>
                 </View>
               )
           }
         }
    />
     }
     {/* You choose which property in the API object that you want to use as an id */}
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   paddingTop:100,
   paddingHorizontal:10
 },
 list: {
   borderWidth:3,
   borderColor:"magenta"
 },
 header: {
   fontSize:30
 },
 text:{
   fontSize:24,
 },
 divider: {
   borderWidth:1,
   borderColor:"#ccc",
   marginVertical:12
 },
 profilePic: {
   width:125,
   height:125,       
   borderRadius:"50%",
   borderColor:"#555",
   borderWidth:1,
  
 },
 rowContainer: {
   flexDirection:"row",
   alignItems:"center",
   gap:10
 }
});


