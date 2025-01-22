import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor:"yellow", flex:25}]}><Text>BOX 1</Text></View>
      <View style={[styles.box, {backgroundColor:"cyan", flex:5}]}><Text>BOX 2</Text></View>
      <View style={[styles.box, {backgroundColor:"pink", flex:45}]}><Text>BOX 3</Text></View>
      <View style={[styles.box, {backgroundColor:"geay", flex:7}]}><Text>BOX 4</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "magenta",
    borderWidth: 10,
    flexDirection: "column",
  },
  box: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
