//API KEY : 1ed187c2a05d4e3592f9799c9132a082
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";

import * as Location from "expo-location";
export default function App() {
  const [currLocationLabel, setCurrLocationLabel] = useState(
    "curr location results here"
  );
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 43.7949433,
    longitude: -79.3529767,
  });

  const [visibleMapRegion, setVisibleMapRegion] = useState({
    latitude: 43.7949433,
    longitude: -79.3529767,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  // use this funciton when the app loads
  useEffect(() => {
    requestPermissions(); // request permissions on every screen load
    getCurrLocation(); // this will make sure to get the current location on every screen load
  }, []);

  // add a function to ask for permissions
  const requestPermissions = async () => {
    try {
      const permissionsObject =
        await Location.requestForegroundPermissionsAsync();
      if (permissionsObject.status === "granted") {
        alert("Location permission granted!");
      } else {
        alert("Permission denied or not provided");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrLocation = async () => {
    //was giving error while trying to execute without try catch block
    try {
      console.log("DEBUG: getCurrLocation");
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      console.log(location);
      const currentCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      //display on screen for location
      setCurrLocationLabel(
        `Lat: ${location.coords.latitude},\n Lng: ${location.coords.longitude}`
      );

      //update the visibleMapRegion to the current location
      setVisibleMapRegion({
        ...currentCoords,
      });
      setCurrentPosition(currentCoords);
    } catch (error) {
      console.error("ERROR: Failed to get current location", error);
      setCurrLocationLabel("ERROR: Failed to retrieve current location.");
    }

    //1. create state variable that stores marker position
    //2. update state variable with lat/lng
    //3. attach state variable to the marker component
    //4. when state variable updates, marker will update
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.calloutTitle}>What's Nearby?</Text>
      <Text style={styles.calloutDescription}>Let's try and look for catering.restaurant.indian and sport.stadium	 </Text>
      <MapView initialRegion={visibleMapRegion} style={styles.map}>
        {/* Used to point the current location on the map, made the marker blue so that it is visible properly*/}
        {currentPosition && (
          <Marker
            coordinate={currentPosition}
            title="Current Location"
            description={currLocationLabel}
            pinColor="blue"
          />
        )}

        {/*Sample Pop-up*/}
        <Marker key={0} coordinate={{ latitude: 43.64, longitude: -79.37 }}>
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>
                The Omni King Edward Hotel
              </Text>
              <Text style={styles.calloutDescription}>
                37 King Street East, Toronto
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  calloutContainer: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: -10,
  },
  calloutTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  calloutDescription: {
    fontSize: 12,
  },
  map: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
    height: "80%",
    width: "90%",
  },
});
