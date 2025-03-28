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
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [currLocationLabel, setCurrLocationLabel] = useState();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [visibleMapRegion, setVisibleMapRegion] = useState({
    //default location set as - 255 Main Street, Toronto, ON, Canada
    latitude: 43.687310,
    longitude: -79.300650,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [showNearbyPlaces, setShowNearbyPlaces] = useState(false);

  useEffect(() => {
    requestPermissions(); // request permissions on every screen load
    getCurrLocation(); // this will make sure to get the current location on every screen load
  }, []);

  //function to ask for permissions
  const requestPermissions = async () => {
    try {
      const permissionsObject =
        await Location.requestForegroundPermissionsAsync();
      if (permissionsObject.status === "granted") {
        alert("Location permission granted!");
      } else {
        alert("Permission denied!");
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
    } catch (error) {
      console.error("ERROR: Failed to get current location", error);
      setCurrLocationLabel("ERROR: Failed to retrieve current location.");
    }
  };

  const fetchNearbyPlaces = async () => {
    try {
      //Note to self - this can be taken as a UI input if wanted for the user to 
      // select category, radius, and limit, rather than hardcoding
      const CATEGORY1 = "catering.restaurant.indian";
      const CATEGORY2 = "education.college";
      const radius = 10000;
      const limit = 15;
      const apiKey = "1ed187c2a05d4e3592f9799c9132a082";

      const url = `https://api.geoapify.com/v2/places?categories=${CATEGORY1},${CATEGORY2}&filter=circle:${currentPosition.longitude},${currentPosition.latitude},${radius}&limit=${limit}&apiKey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.features) {
        setNearbyPlaces(data.features);
        console.log("Nearby Places:", data.features);
        setShowNearbyPlaces(true);
        /*
        Note to self - this can be forced to re-render the map to ensure that all the logos are visible properly
        but the problem I'm still facing, can be a tooltip problem is that, the tooltips after re-render
        appear as a default red pin, and once I click that, the map keeps on moving up and 
        then the logos appear once tooltip is out of the screen 
        
        setTimeout(() => {
        setVisibleMapRegion({...visibleMapRegion});
        }, 100);*/
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

      {/*A show nearby button which would help to render the icons and callout tooltips on the map*/}
      <Button title={"Show Nearby"} onPress={fetchNearbyPlaces} />
      <MapView region={visibleMapRegion} style={styles.map}>
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

        {showNearbyPlaces &&
          nearbyPlaces.map((location, index) => {
            const isSchool =
              location.properties.categories.includes("education");
            const isRestaurant =
              location.properties.categories.includes("catering.restaurant.indian");

          
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: location.geometry.coordinates[1],
                  longitude: location.geometry.coordinates[0],
                }}
              >
                {isSchool && <Ionicons name="school" size={30} color="black" />}
                {isRestaurant && <Ionicons name="restaurant" size={30} color="black" />}
                <Callout tooltip>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutTitle}>
                      {location.properties.name}
                    </Text>
                    <Text style={styles.calloutDescription}>
                      {location.properties.address_line2}
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
