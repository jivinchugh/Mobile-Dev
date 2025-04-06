import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextView,
  Switch,
  Pressable,
} from "react-native";
import { useState } from "react";

// 1. TODO: import the required service  (db, auth, etc) from FirebaseConfig.js
import { auth } from "../firebaseConfig";

// 2. TODO: import the specific functions from the service (import ___ from "firebase/firebase auth)
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  // form fields
  const [emailFromUI, setEmailFromUI] = useState("jchugh@myseneca.ca");
  const [passwordFromUI, setPasswordFromUI] = useState("jchugh");
  const [errorMessageLabel, setErrorMessageLabel] = useState(
    "Error messages go here"
  );

  const [isProducerInUI, setIsProducerInUI] = useState(false);
  const [genreFromUI, setGenreFromUI] = useState("Pop");
  const [artistFromUI, setArtistFromUI] = useState("Michael Jackson");

  const loginPressed = async () => {
    console.log("Logging in...");

    try {
      await signInWithEmailAndPassword(auth, emailFromUI, passwordFromUI);
      alert("LOGIN SUCCESS!");
      // will give you back some data
      console.log(auth.currentUser); // Changed from console(auth.currentUser)
    } catch (err) {
      console.log("Error when doing login");
      console.log(`Error code: ${err.code}`);
      console.log(`Error message: ${err.message}`);
      setErrorMessageLabel(err.message);
    }
  };

  const checkLoginStatus = () => {
    // if user is logged in, then this will contain an object
    // if no one is logged in, then thsi will be null
    console.log(auth.currentUser);
  };

  const logoutUser = () => {
    // code to logout user
    auth.signOut();
    alert("User is logged out!");
  };

  const createAccountPressed = async () => {
    console.log("Creating account...");
    try {
      // todo: write the code to create a user account
      // 1. attempt to create the account with the given email/password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailFromUI,
        passwordFromUI
      );

      // 2. if successful, then a copy of the account information will be store din the
      // userCredential variable
      console.log(userCredential);

      alert("Account created! Check Website!");

      // 3. what is the email address of the created account
      console.log(`Email of account: ${userCredential.user.email}`);
      console.log(`Firebase uid for this account: ${userCredential.user.uid}`);

      // 4. navigate you to the next screen of the app
      // navigation.navigate("Home")
    } catch (err) {
      console.log("Error when creating user");
      console.log(`Error code: ${err.code}`);
      console.log(`Error message: ${err.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Music App!</Text>
      <Text style={styles.text}>Login or Signup</Text>
      {/* email tb */}
      <TextInput
        placeholder="Enter email"
        onChangeText={setEmailFromUI}
        value={emailFromUI}
        style={styles.tb}
      />

      {/* password tb */}
      <TextInput
        placeholder="Enter password"
        onChangeText={setPasswordFromUI}
        value={passwordFromUI}
        style={styles.tb}
      />

      {/* other data for the user profile */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 16,
        }}
      >
        <Text style={styles.heading}>Additional Info</Text>
        <Text>Are you a music producer?</Text>
        <Switch onValueChange={setIsProducerInUI} value={isProducerInUI} />

        <Text>Favorite Genre?</Text>
        <TextInput
          placeholder="What is your favorite genre?"
          onChangeText={setGenreFromUI}
          value={genreFromUI}
          style={styles.tb}
        />

        <Text>Favorite Artist?</Text>
        <TextInput
          placeholder="What is your favorite artist?"
          onChangeText={setArtistFromUI}
          value={artistFromUI}
          style={styles.tb}
        />
      </View>

      {/* button */}

      <Pressable onPress={loginPressed} style={styles.btn}>
        <Text style={styles.btnLabel}>Login</Text>
      </Pressable>

      <Pressable onPress={createAccountPressed} style={styles.darkBtn}>
        <Text style={[styles.btnLabel, { color: "#fff" }]}>Create Account</Text>
      </Pressable>
      <Pressable onPress={checkLoginStatus} style={styles.btn}>
        <Text style={[styles.btnLabel, { color: "#000" }]}>
          Check for logged in user?
        </Text>
      </Pressable>
      <Pressable onPress={logoutUser} style={styles.btn}>
        <Text style={[styles.btnLabel, { color: "#000" }]}>Logout?</Text>
      </Pressable>

      <Text>{errorMessageLabel}</Text>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  tb: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#efefef",
    color: "#333",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#141D21",
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 8,
  },
  darkBtn: {
    borderWidth: 1,
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 16,
    marginVertical: 8,
  },
  btnLabel: {
    fontSize: 16,
    textAlign: "center",
  },
  error: {
    fontSize: 16,
    textAlign: "center",
    color: "blue",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
});
