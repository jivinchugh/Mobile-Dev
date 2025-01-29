import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={[{ flexDirection: "row", justifyContent: "flex-end", gap: 15, borderWidth: 1, borderColor: "red", alignItems: "center" }]}>
        <Text>Gmail</Text>
        <Text>Images</Text>
        <MaterialCommunityIcons name="dots-grid" size={50} color="black" />
        <View style={{ borderWidth: 1, borderColor:"#BDB0A6", height: 50, width: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", backgroundColor: "#d5c7bc" }}>
          <Text>JC</Text>
        </View>
      </View>
      <Image
        source={{ uri: "https://www.google.com/logos/doodles/2023/2023-womens-world-cup-opening-day-6753651837110060-2xa.gif" }}
        style={{ width: 400, height: 140, borderColor: "blue", borderWidth: 1 }}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8dbe2",
    borderWidth: 1,
    borderColor: "green",
    marginTop: 60,
  },
  centered: {
    // textAlign:"center"
  }
});


