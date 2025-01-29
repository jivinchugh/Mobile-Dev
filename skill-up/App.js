import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {justifyContent: "space-between"}]}>
      <Text style={{ fontSize:20, textAlign:"center"}}>SkillUp</Text>
      <Text style={{ fontWeight : "bold", fontSize:50, textAlign:"center"}}>Choose from 210,000 {'\n'} courses</Text>
      <Text style={{ fontSize:20, textAlign:"center"}}>Find us at www.skillup.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderWidth: 1.5,
    borderColor: "green",
  },
});
