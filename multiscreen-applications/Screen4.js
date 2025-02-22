import { StyleSheet, Text, View } from 'react-native';

const Screen3 = () => {
   return(
      <View style={styles.container}>
         <Text>
          Here is the Login Screen
         </Text>
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

