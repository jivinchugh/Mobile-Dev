import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [addressFromUI, setAddressFromUI] = useState(
    "75 Crow Trail Drive, Scarborough, ON"
  );

  // Starbucks Vancouver: 2505 Granville St, Vancouver, BC V6H 3G7
  const [latFromUI, setLatFromUI] = useState("43.687310");
  const [lngFromUI, setLngFromUI] = useState("-79.300650");

  const [fwdGecodeResultsLabel, setFwdGecodeResultsLabel] = useState(
    "reverse geocoding results go here"
  );
  const [reverseGecodeResultsLabel, setReverseGecodeResultsLabel] = useState(
    "reverse geocoding results go here"
  );
  const [currLocationLabel, setCurrLocationLabel] = useState(
    "curr location results here"
  );

  // state variable to control visible area of the map
  //the coordinates dictate starting position on the map
  const [visibleMapRegion, setVisibleMapRegion] = useState({
    latitude: 43.7949433,
    longitude: -79.3529767,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  // use this funciton when the app loads
  useEffect(() => {
    requestPermissions();
  }, []);

  // dd a function to ask for permissions
  const requestPermissions = async () => {
    try {
      const permissionsObject =
        await Location.requestForegroundPermissionsAsync();
      if (permissionsObject.status === "granted") {
        alert("Permission granted!");
      } else {
        alert("Permission denied or not provided");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const doFwdGeocode = async () => {
    console.log("DEBUG: doFwdGeocode");
    //1. convert address to lat/lng
    const geocodedLocation = await Location.geocodeAsync(addressFromUI);

    //2. get the results
    const results = geocodedLocation[0];
    //a. results undefined
    //b. results is an object
    if (results === undefined) {
      //could not find matching coordinate
      //addressfromUI= "lololol lololol not a location"
      console.log("ERROR: Could not find matching coordinate");
      setFwdGecodeResultsLabel("ERROR: Could not find matching coordinate");
      //stop and do not proceed with any other logic
      return;
    }
    console.log("Result found: ", results);

    //3. extract co-ordinates and show it in UI
    const output = `${results.latitude}, ${results.longitude}`;
    setFwdGecodeResultsLabel(output);
  };

  const doReverseGeocode = async () => {
    console.log("DEBUG: doReverseGeocode");
    //1. get co-ordinates from the UI
    //build an object with it
    //use property names with these spellings: latitude, longitude
    //req of the Location.geocode function
    //data in textbox is always string
    // but the location.geocode function needs numbers
    //so you must convert to a number before you can use it
    const coords = {
      latitude: parseFloat(latFromUI),
      longitude: parseFloat(lngFromUI),
    };
    //use the function
    //parameter #2 is always an empty object
    const addresses = await Location.reverseGeocodeAsync(coords, {});
    const results = addresses[0];
    //handle results
    if (results === undefined) {
      console.log("ERROR: Could not find matching address");
      setReverseGecodeResultsLabel("ERROR: Could not find matching address");
      return;
    }
    console.log("Result found: ", results);
    //3. extract location and show it in UI
    const output = `${results.name}, ${results.city}, ${results.region}, ${results.postalCode}`;
    setReverseGecodeResultsLabel(output);
  };

  const getCurrLocation = async () => {
    try {
      console.log("DEBUG: getCurrLocation");
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      console.log(location);
      setCurrLocationLabel(
        `Lat: ${location.coords.latitude},\n Lng: ${location.coords.longitude}`
      );
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
      <Text style={styles.headingText}>Geocoding Demo</Text>

      <TextInput
        style={styles.input}
        onChangeText={setAddressFromUI}
        placeholder="Enter address (example: 123 Main Street)"
        value={addressFromUI}
      />
      <Button title="Forward Geocoding" onPress={doFwdGeocode} />
      <Text style={styles.text}>{fwdGecodeResultsLabel}</Text>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          style={styles.input}
          onChangeText={setLatFromUI}
          placeholder="Enter latitude"
          value={latFromUI}
        />
        <TextInput
          style={styles.input}
          onChangeText={setLngFromUI}
          placeholder="Enter longitude"
          value={lngFromUI}
        />
      </View>

      <Button title="Reverse Geocoding" onPress={doReverseGeocode} />
      <Text style={styles.text}>{reverseGecodeResultsLabel}</Text>

      <Button title="Get Current Location" onPress={getCurrLocation} />
      <Text style={styles.text}>{currLocationLabel}</Text>
      <MapView initialRegion={visibleMapRegion} style={styles.map}>
        <Marker
          coordinate={{ latitude: 43.6826927, longitude: -79.6904297 }}
          title="YYZ Airport"
          description="Toronto Pearson International Airport"
        />
        <Marker coordinate={{ latitude: 43.948238, longitude: -79.0435025 }}>
          <View
            style={{
              backgroundColor: "yellow",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <Text>XX</Text>
          </View>
        </Marker>
      </MapView>
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
  text: {
    fontSize: 18,
    marginVertical: 8,
    textAlign: "center",
  },
  headingText: {
    fontSize: 24,
    marginVertical: 8,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  map: {
    borderWidth: 1,
    borderColor: "black",
    height: 300,
    width: "90%",
  },
});
