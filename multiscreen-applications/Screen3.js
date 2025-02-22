import { StyleSheet, Text, View } from 'react-native';

const Screen3 = ({route}) => {
    console.log(route.params)



   return(
      <View style={styles.container}>
         <Text>
          Here is the Screen #3
         </Text>
         <Text>What is x? {route.params.x}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
});

export default Screen3

