// import { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { CommentsScreen } from "./Screens/CommentsScreen"

// const MainStack = createStackNavigator();

export default function App() {
  // const [activeScreen, setActiveScreen] = useState(0);
  // const changeScrennFunc = (value) => { setActiveScreen(value) }

  return (
    // <NavigationContainer>
    // //   <MainStack.Navigator>
    // {/* //     <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
    // //     <MainStack.Screen name="Registration" component={RegistrationScreen} />
    // //     <MainStack.Screen name="LogIn" component={LoginScreen} />
    // //     <MainStack.Screen name="Home" component={Home} /> */}
    // //   </MainStack.Navigator>
    // // </NavigationContainer>



    <SafeAreaView style={styles.container}>
    {/* {activeScreen === 0 ? <LoginScreen changeScrenn={changeScrennFunc} /> :
      <RegistrationScreen changeScrenn={changeScrennFunc} />}
    <StatusBar style="auto" /> */}
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <CreatePostsScreen /> */}
      <CommentsScreen />
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
