import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

export const CommentsScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight>
          <AntDesign name="arrowleft" size={24} color="#212121" style={styles.iconBack} />
        </TouchableHighlight>
        <Text style={styles.headerText}>Коментарі</Text>
      </View>
      <View style={styles.imgWrapper}>
        <Image source={require('../assets/loadimg.png')} style={styles.imgLoaded} />
      </View>
      <View style={styles.commentsListWrapper}>
        <View style={styles.commentsList}>
          <View style={styles.commentItem}>
            <Image source={require('../assets/user-avatar.png')} style={styles.imgAvatar} />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
              <Text style={styles.commentTextDate}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>

          <View style={styles.commentItem}>
            <Image source={require('../assets/msin-user-avatar.png')} style={styles.imgAvatar} />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.</Text>
              <Text style={styles.commentTextDate}>09 червня, 2020 | 09:14</Text>
            </View>
          </View>

          <View style={styles.commentItem}>
            <Image source={require('../assets/user-avatar.png')} style={styles.imgAvatar} />
            <View style={styles.commentTextWrapper}>
              <Text style={styles.commentText}>Thank you! That was very helpful!</Text>
              <Text style={styles.commentTextDate}>09 червня, 2020 | 09:20</Text>
            </View>
          </View>
          <View style={styles.inputCommentWrapper}>
            <TextInput placeholder={"Коментувати..."} placeholderTextColor={"#BDBDBD"} inputMode={'text'} style={styles.inputCommentText} />
            <View style={styles.circle}></View>
            <AntDesign name="arrowup" size={14} color="#FFFFFF" style={styles.arrowUp} />
          </View>


        </View>
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
    gap: 110,
    alignItems: "center",
    background: "#FFFFFF",
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
    width: 383,
    marginTop: 43,
    alignItems: "center",
    borderRadius: 8,
  },

  imgLoaded: {
    width: 370,
    borderRadius: 8,
  },

  commentsListWrapper: {
    height: '100%',
    marginTop: 32,
    paddingRight: 30,
    color: "#212121",
  },

  commentsList: {
    flex: 1,
  },

  commentItem: {
    flexDirection: "row",
    marginBottom: 24,
  },

  commentTextWrapper: {
    width: 330,
    marginLeft: 16,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03);",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },

  commentText: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
  },

  commentTextDate: {
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },

  imgAvatar: {
    width: 28,
    height: 28,
  },

  inputCommentWrapper: {
    margintop: 31,
    flex: 1,

  },

  inputCommentText: {
    position: 'relative',
    width: 373,
    paddingVertical: 16,
    paddingLeft: 16,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },

  circle: {
    position: "absolute",
    top: 8,
    right: -2,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: '100%',
  },

  arrowUp: {
    position: "absolute",
    zIndex: 100,
    top: 18,
    right: 8,
  }
 });