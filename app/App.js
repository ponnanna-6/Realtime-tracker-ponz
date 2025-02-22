import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

export default function App() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "850335019121-5c89ja8dnehb10j92fer56jef08u5925.apps.googleusercontent.com",
    });
  }, []);

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log(user)
      setUserInfo(user);
      setError();
    } catch (e) {
      setError(e);
    }
  };

  const logout = () => {
    setUserInfo();
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Realtime Tracker</Text>
      <Text>{JSON.stringify(error)}</Text>
      {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
      {userInfo ? (
        <Button title="Logout" onPress={logout} />
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signin}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  appName: {
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    color: "#333",
  },  
});