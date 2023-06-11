// import { useFonts } from 'expo-font';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
// import { PlusCircled } from "@radix-ui/react-icons";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(true);

  const navigation = useNavigation();

  // const [fontsLoaded] = useFonts({
  //   'Roboto': require('../assets/fonts/Roboto.ttf'),
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }
  const handleLogin = (login) => setLogin(login);
  const handleEmail = (email) => setEmail(email);
  const handlePassword = (password) => setPassword(password);
  const showPassword = () => {
    return isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
  };
  const userRegister = () => {
    if (!login || !email || !password) {
      alert('Please enter data!');
    }
    console.log(`login: ${login}; email: ${email}; password: ${password}`);
    navigation.navigate("Home", {
      screen: "Posts",
    });
    return;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg_image.jpg')} resizeMode="cover" style={styles.imageBg}>
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                <View>
                  <Text style={styles.formTitle}>Реєстрація</Text>

                  <TextInput placeholder={"Логін"} placeholderTextColor={"#BDBDBD"} value={login} inputMode={'text'} onChangeText={handleLogin} style={styles.inputText} />
                  <TextInput placeholder={"Адреса електронної пошти"} placeholderTextColor={"#BDBDBD"} value={email} inputMode={'email'} onChangeText={handleEmail} style={styles.inputText} />
                  <View>
                    <TextInput placeholder={"Пароль"} placeholderTextColor={"#BDBDBD"} secureTextEntry={isShowPassword} value={password} onChangeText={handlePassword} style={styles.inputPassword} />
                    <TouchableOpacity activeOpacity={0.8} onPress={showPassword} style={styles.showPasswordInput}>
                      <Text style={styles.showPasswordText}>{isShowPassword ? 'Показати' : 'Приховати'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.formRegistrButton}
                >
                  <Text style={styles.buttonRegistrTitle} onPress={userRegister}>Зареєструватись</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("LogIn")}>
                  <Text style={styles.loginLinkText}>Вже є аккаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View >
    </TouchableWithoutFeedback >
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
    marginTop: 43,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
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