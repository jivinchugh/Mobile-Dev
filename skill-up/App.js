import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 22, flex:4, fontSize:20}}>SkillUp</Text>
      <Text style={{ fontWeight : "bold", fontSize:50, marginTop:260 , textAlign:"center", flex:92}}>Choose from 210,000 {'\n'} courses</Text>
      <Text style={{ flex:4, marginBottom: 22, fontSize:20}}>Find us at www.skillup.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22
  },
});
