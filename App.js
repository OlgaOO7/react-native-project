// import { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  // const [activeScreen, setActiveScreen] = useState(0);
  // const changeScrennFunc = (value) => { setActiveScreen(value) }

  return (
    <SafeAreaView style={styles.container}>
      {/* {activeScreen === 0 ? <LoginScreen changeScrenn={changeScrennFunc} /> :
        <RegistrationScreen changeScrenn={changeScrennFunc} />}
      <StatusBar style="auto" /> */}
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
