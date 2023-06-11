import { useState } from "react";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { StyleSheet, ScrollView, View, Text, Image, TouchableHighlight } from "react-native";

export const PostsScreen = () => {
  const [post, setPost] = useState([]);

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <MaterialCommunityIcons name="exit-to-app" size={24} color="#BDBDBD" />
      </View> */}
      <View style={styles.profileContactsWrapper}>
        <Image source={require('../assets/user.png')} style={styles.imgUser} />
        <View style={styles.textWrapper}>
          <Text style={styles.loginText}>{"login"}</Text>
          <Text style={styles.emailText}>{"email"}</Text>
        </View>
        {/* <View style={styles.footer}>
          <TouchableHighlight style={styles.addBtn}>
            <Feather name="plus" size={24} color="#FFFFFF" />
          </TouchableHighlight>
        </View> */}
      </View>
    </ScrollView>
    
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    background: "#FFFFFF",
  },

  headerText: {
    marginLeft: 150,
    marginRight: 120,
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.41,
    color: "#212121",
  },

  profileContactsWrapper: {
    flexDirection: "row",
    marginTop: 32,
  },

  imgUser: {
    width: 60,
    height: 60,
    borderRadiuse: 16,
  },

  textWrapper: {
    marginLeft: 8,
    marginTop: 16,
  },

  loginText: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    textAlign: "center",
    color: "#212121",
  },

  emailText: {
    fontSize: 11,
    lineHeight: 13,
    textAlign: "center",
    color: "rgba(33, 33, 33, 0.8)",
  },

  footer: {
    flex: 1,
    marginTop: 640,
    paddingLeft: 58,
  },

  addBtn: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  }
})