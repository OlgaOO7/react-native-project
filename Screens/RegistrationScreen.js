import { AntDesign } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from "react-native";
// import { PlusCircled } from "@radix-ui/react-icons";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  // const [fontsLoaded] = useFonts({
  //   'Roboto': require('../assets/fonts/Roboto.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg_image.jpg')} resizeMode="cover" style={styles.imageBg}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        </KeyboardAvoidingView>
        <View style={styles.form}>
          <View style={styles.formWrapper}>
            <View style={styles.imageContainer}>
              <TouchableHighlight>
                {/* <Image source={require("../assets/add-photo_registr.png")} /> */}
                <AntDesign name="pluscircleo" size={25} color="#FF6C00" style={styles.addIcon} />
              </TouchableHighlight>
              {/* <View> */}
              {/* <PlusCircled /> */}
              {/* </View> */}
            </View>
            <Text style={styles.formTitle}>Реєстрація</Text>
            <TextInput placeholder={"Логін"} placeholderTextColor={"#BDBDBD"} value={login} inputMode={'text'} style={styles.inputText} />
            <TextInput placeholder={"Адреса електронної пошти"} placeholderTextColor={"#BDBDBD"} value={email} inputMode={'email'} style={styles.inputText} />
            <View>
              <TextInput placeholder={"Пароль"} placeholderTextColor={"#BDBDBD"} value={password} style={styles.inputPassword} />
              <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("onPress")} style={styles.showPasswordInput}>
                <Text style={styles.showPasswordText}>Показати</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.formRegistrButton}
            >
              <Text style={styles.buttonRegistrTitle}>Зареєструватись</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("onPress")}>
              <Text style={styles.loginLinkText}>Вже є аккаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },

  imageContainer: {
    position: "absolute",
    top: -60,
    left: 147,

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addIcon: {
    // position: "absolute",
    // top: 21,
    // left: 107,
    // zIndex: 100,
    marginTop: '65%',
    left: '90%',
  },

  form: {
    flex: 1,
    justifyContent: "flex-end",
  },

  formWrapper: {
    position: "relative",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",
  },

  formTitle: {
    paddingTop: 92,
    marginBottom: 32,
    // fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    color: "#212121",
    textAlign: "center",
  },

  inputText: {
    width: 343,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },

  inputPassword: {
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },

  showPasswordInput: {
    position: 'absolute',
    top: 15,
    right: 16,
  },

  showPasswordText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  formRegistrButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    backgroundColor: "##FF6C00",
    borderRadius: 100,
  },

  buttonRegistrTitle: {
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF"
  },

  loginLinkText: {
    marginTop: 16,
    marginBottom: 78,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  }
})