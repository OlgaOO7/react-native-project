import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Image, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";

export const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(true);

  const navigation = useNavigation();

  // const [fontsLoaded] = useFonts({
  //   'Roboto': require('../assets/fonts/Roboto.ttf'),
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }

  const handleMail = (mail) => setMail(mail);
  const handlePassword = (password) => setPassword(password);
  const showPassword = () => {
    return isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
  };

  const userLogin = () => {
    if (!mail || !password) {
      alert('Please enter data!');
    }
    console.log(`mail: ${mail}; password: ${password}`);
    navigation.navigate("Home", {
      screen: "PostsScreen",
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
                <Text style={styles.formTitle}>Увійти</Text>

                <TextInput placeholder={"Адреса електронної пошти"} placeholderTextColor={"#BDBDBD"} value={mail} inputMode={'email'} onChangeText={handleMail} style={styles.inputText} />
                <View>
                  <TextInput placeholder={"Пароль"} placeholderTextColor={"#BDBDBD"} value={password}  secureTextEntry={isShowPassword} onChangeText={handlePassword} style={styles.inputPassword} />
                  <TouchableOpacity activeOpacity={0.8} onPress={showPassword} style={styles.showPasswordInput}>
                    <Text style={styles.showPasswordText}>{isShowPassword ? 'Показати' : 'Приховати'}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.formLoginButton}
                >
                  <Text style={styles.buttonRegistrTitle} onPress={userLogin}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Registration")}>
                  <Text style={styles.loginLinkText}>Немає акаунту? Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View >
    </TouchableWithoutFeedback>
  )
};

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
    height: 489,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",
  },

  formTitle: {
    paddingTop: 32,
    marginBottom: 33,
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

  formLoginButton: {
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
    marginBottom: 111,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  }
})
