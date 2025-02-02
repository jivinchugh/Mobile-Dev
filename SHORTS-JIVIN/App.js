import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function App() {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={require("./assets/short.png")} style={{ width: '100%', height: '100%' }} >
        {/* the whole screen is divided into two boxes */}

        {/* Top-box */}
        <View style={{ marginTop: 10 }}>
          {/* Top row that includes Shorts label, search and three dots */}
          <View style={[styles.notchmargin, { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }]}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>Shorts</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome name="search" size={30} color="white" />
              <Entypo name="dots-three-vertical" size={30} color="white" />
            </View>
          </View>

          {/* Subscription, Live, Shopping buttons row */}
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: 5, marginTop: 18, alignItems: "center" }}>
            <View style={[styles.buttonswithIconandText, { width: 150 }]}>  
              <Entypo name="bell" size={24} color="black" />
              <Text style={{ fontSize: 18, marginLeft:4 }}>Subscription</Text>
            </View>
            <View style={[styles.buttonswithIconandText, { width: 80 }]}>  
              <MaterialIcons name="live-tv" size={24} color="black" />
              <Text style={{ fontSize: 18, marginLeft:4 }}>Live</Text>
            </View>
            <View style={[styles.buttonswithIconandText, { width: 120 }]}>
              <Entypo name="shopping-cart" size={24} color="black" />
              <Text style={{ fontSize: 18, marginLeft:4 }}>Shopping</Text>
            </View>
          </View>
        </View>

        {/* Bottom-box */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

          {/* Channel icon, channel name, subscribe button and Video Title */}
          <View style={{ flexDirection: "column", alignItems: "left", marginTop: 550, marginLeft: 15, marginBottom: 60 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("./assets/channelicon.png")} style={{ height: 40, width: 40, borderRadius: 25 }} />
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 22, marginLeft: 10 }}>@MrBeast</Text>
              <View style={[styles.buttonswithIconandText, { height: 40, width: 110, marginLeft: 10, backgroundColor: "white" }]}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Subscribe</Text>
              </View>
            </View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 22, marginTop: 9 }}>Holding Bigger And Bigger Dogs</Text>
          </View>

          {/* Like, Dislike, Comment and Share */}
          <View style={{ flexDirection: "column", marginRight: 15, alignContent: "center", alignItems: "center", marginTop: 269 }}>
            <View style={styles.iconCircle}>
              <AntDesign name="like1" size={24} color="white" />
            </View>
            <Text style={styles.textstylingforBelowButtons}>6.5M</Text>
            <View style={styles.iconCircle}>
              <AntDesign name="dislike1" size={24} color="white" />
            </View>
            <Text style={styles.textstylingforBelowButtons}>Dislike</Text>
            <View style={styles.iconCircle}>
              <FontAwesome name="commenting" size={24} color="white" />
            </View>
            <Text style={styles.textstylingforBelowButtons}>5,997</Text>
            <View style={styles.iconCircle}>
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
            <Text style={styles.textstylingforBelowButtons}>Share</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  notchmargin: {
    marginTop: 50,
  },
  buttonswithIconandText: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: "rgba(200, 200, 200, 0.9)",
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(202, 202, 202, 0.8)",
  },
  iconCircle: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  textstylingforBelowButtons: {
    color: "black",
    fontSize: 18,
    marginVertical: 8,
    fontWeight: "500",
  },
});
