import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

export const CommentsScreen = () => {

  return (
    <View>
            <View style={styles.header}>
        <TouchableHighlight>
          <AntDesign name="arrowleft" size={24} color="#212121" style={styles.iconBack} />
        </TouchableHighlight>
        <Text style={styles.headerText}>Коментарі</Text>
      </View>
      <View style={styles.imgBackground}>
        <View style={styles.imgCircle}>
          <Image source={require('../assets/camera.png')} style={styles.imageCamera} />
        </View>
      </View>
      <Text style={styles.downloadText}>Завантажте фото</Text>
      <View style={styles.inputWrapper}>
        <TextInput placeholder={"Назва..."} placeholderTextColor={"#BDBDBD"} inputMode={'text'} style={styles.inputText} />
        <TextInput placeholder={"Місцевість..."} placeholderTextColor={"#BDBDBD"} inputMode={'url'} style={styles.inputText} />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.publicBtn}>
        <Text style={styles.publicateText}>Опублікувати</Text>
      </TouchableOpacity>
      <View style={styles.deleteBtnWrapper}>
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



})