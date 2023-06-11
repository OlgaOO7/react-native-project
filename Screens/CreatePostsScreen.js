import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#212121" style={styles.iconBack} />
        </TouchableHighlight>
        <Text style={styles.headerText}>Створити публікацію</Text>
      </View>
      <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          </KeyboardAvoidingView>
      <View style={styles.imgWrapper}>
        <View style={styles.imgCircle}>
          <Image source={require('../assets/camera.png')} style={styles.imageCamera} />
        </View>
      </View>
      <Text style={styles.downloadText}>{!photo ? "Завантажте фото" : "Реадагувати фото"}</Text>
      <View style={styles.inputWrapper}>
        <TextInput placeholder={"Назва..."} placeholderTextColor={"#BDBDBD"} inputMode={'text'} style={styles.inputText} />
        <TextInput placeholder={"Місцевість..."} placeholderTextColor={"#BDBDBD"} inputMode={'url'} style={styles.inputText} />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.publicBtn}>
        <Text style={styles.publicateText}>Опублікувати</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableHighlight style={styles.deleteBtn}>
          <AntDesign name="delete" size={24} color="#BDBDBD" />
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },

  header: {
    flexDirection: "row",
    gap: 68,
    alignItems: "center",
    background: "#FFFFFF",
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOpacity: 0.3,
    // shadowOffset: {
    //   width: 0,
    //   height: 0.5,
    // },
    // shadowRadius: 1,
    // overlay: {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // },
  },

  iconBack: {
    marginTop: 16,
  },

  headerText: {
    paddingVertical: 6.5,
    paddingHorizontal: 11,
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#212121",
    textAlign: "center",
  },

  imgWrapper: {
    position: "relative",
    width: 383,
    height: 240,
    marginTop: 43,
    // marginLeft: "auto",
    // marginRight: "auto",
    backgroundColor: "#F6F6F6",
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },

  imgCircle: {
    position: "absolute",
    top: 90,
    left: 161.5,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },

  imageCamera: {
    top: 18,
    left: 18,
  },

  downloadText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  inputWrapper: {
    marginTop: 32,
    gap: 16,
  },

  inputText: {
    width: 383,
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    color: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
  },

  publicBtn: {
    marginTop: 42,
    width: 383,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },

  footer: {
    alignItems: "center",
  },

  deleteBtn: {
    marginTop: 120,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});


