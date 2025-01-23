import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={[styles.boxgroup, { justifyContent: 'flex-end'}]}>
        <View style={[styles.box]}>
          <Text style={[styles.textstyle]}>One</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text style={[styles.textstyle]}>Two</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "palegreen" }]}>
          <Text style={[styles.textstyle]}>Three</Text>
        </View>
      </View>

      <View style={[styles.boxgroup, { justifyContent: 'flex-start'}]}>
        <View style={[styles.box]}>
          <Text style={[styles.textstyle]}>One</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text style={[styles.textstyle]}>Two</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "palegreen" }]}>
          <Text style={[styles.textstyle]}>Three</Text>
        </View>
      </View>

      <View style={[styles.boxgroup, { justifyContent: 'center'}]}>
        <View style={[styles.box]}>
          <Text style={[styles.textstyle]}>One</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text style={[styles.textstyle]}>Two</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "palegreen" }]}>
          <Text style={[styles.textstyle]}>Three</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  boxgroup: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "row",
    marginVertical: 10,
  },
  box: {
    justifyContent: 'space-evenly',
    height: '30%',
    padding: 20,
    margin: 10,
    backgroundColor: 'pink',
  },
  textstyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }

});
