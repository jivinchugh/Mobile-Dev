import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [currLocationLabel, setCurrLocationLabel] = useState();

  const [currentPosition, setCurrentPosition] = useState(null);
  const [visibleMapRegion, setVisibleMapRegion] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

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
    try {
      console.log("+++++++++++++++++ getCurrLocation");
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
      //update the currentPosition state variable
      setCurrentPosition(currentCoords);
      //update the visibleMapRegion to the current location
      setVisibleMapRegion({
        latitude: currentCoords.latitude,
        longitude: currentCoords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
      await fetchNearbyPlaces(currentCoords);
    } catch (error) {
      console.error("ERROR: Failed to get current location", error);
      setCurrLocationLabel("ERROR: Failed to retrieve current location.");
    }
  };

  const fetchNearbyPlaces = async (coords) => {
    try {
      const CATEGORY1 = "catering.restaurant.indian";
      const CATEGORY2 = "education.college";
      const radius = 20000;
      const limit = 20;
      const apiKey = "1ed187c2a05d4e3592f9799c9132a082";

      const url = `https://api.geoapify.com/v2/places?categories=${CATEGORY1},${CATEGORY2}&filter=circle:${coords.longitude},${coords.latitude},${radius}&limit=${limit}&apiKey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json(); //convert response to JSON

      /*tried extracting data and that didn't work, 
      so looked up to sample API response for endpoint and it was
      {"type":"FeatureCollection","features":[{...},{...},{...}]}
      so I used data.features to extract the data from the response
      */
      if (data.features) {
        setNearbyPlaces(data.features);
        console.log("Nearby Places:", data.features);
      }
    } catch (error) {
      console.error("API fetch error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.calloutTitle}>What's Nearby?</Text>
      <Text style={styles.calloutDescription}>
        Let's try and look for catering.restaurant.indian and education.college
      </Text>
      <MapView initialRegion={visibleMapRegion} style={styles.map}>
        {currentPosition && (
          <Marker coordinate={currentPosition} pinColor="blue">
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>Current Location</Text>
                <Text style={styles.calloutDescription}>
                  {currLocationLabel}
                </Text>
              </View>
            </Callout>
          </Marker>
        )}

        {nearbyPlaces.map((place, index) => {
          const isSchool = place.properties.categories.includes("education");
          const isRestaurant = place.properties.categories.includes("catering");

          return (
            <Marker
              key={index}
              coordinate={{
                latitude: place.geometry.coordinates[1],
                longitude: place.geometry.coordinates[0],
              }}
            >
              {isSchool && <Ionicons name="school" size={30} color="black" />}
              {isRestaurant && <Ionicons name="restaurant" size={30} color="black" />}

              <Callout tooltip>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutTitle}>
                    {place.properties.name}
                  </Text>
                  <Text style={styles.calloutDescription}>
                    {place.properties.address_line2}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
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
