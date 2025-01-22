import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menuitems}>Download</Text>
        <Text style={styles.menuitems}>Nitro</Text>
        <Text style={styles.menuitems}>Discover</Text>
        <Text style={styles.menuitems}>Quests</Text>
        <Text style={styles.menuitems}>Safety</Text>
        <Text style={styles.menuitems}>Support</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textColor: "white",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "black",
    width: "90%",
    paddingVertical: 20,
    backgroundColor: "#080434",
  },
  menuitems: {
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  }
});

// "#080434"
