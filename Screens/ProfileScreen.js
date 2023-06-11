import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, ImageBackground, Image, FlatList } from "react-native";

export const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg_image.jpg')} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.profileWrapper}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("LogIn")} style={{
              marginTop: 22,
              marginLeft:350,
              backgroundColor: "#FFFFFF",
            }}>
              <MaterialCommunityIcons name="exit-to-app" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          <View style={styles.profile}>
            <View>
              <Text style={styles.profileName}>{"login"}</Text>
            </View>
            <View style={styles.avatarWrapper}>
              <Image source={require("../assets/profileAvatar.png")} style={styles.avatar} />
              <TouchableOpacity>
                <MaterialIcons name="cancel" size={25} color="#BDBDBD" style={styles.cancelImgIcon}/>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={posts}
            style={{ marginBottom: 43 }}
            renderItem={({ item }) => (
              <View style={styles.postsWrapper}>
                <View style={styles.postItem}>
                  {/* <Image source={{ uri: item.photo }} style={styles.postImg} /> */}
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <View style={styles.postInfoWrapper}>
                    <View style={styles.infoInnerBox}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Comments", {
                            postId: item.id,
                            photo: item.photo,
                          });
                        }}
                      >
                        {!item.comments && (
                          <EvilIcons name="comment" size={18} color="#BDBDBD" style={{ marhinRight: 6 }} />
                        )}
                        {item.comments && item.comments.length > 0 && (
                          <EvilIcons name="comment" size={18} color="#FF6C00" style={{ marhinRight: 6 }} />
                        )}
                      </TouchableOpacity>
                      <Text
                        style={styles.commentQuantity}>
                        {item.comments?.length ?? 0}
                      </Text>
                    </View>
                    <View style={styles.locationInfoWrapper}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Map");
                        }}
                      >
                        <EvilIcons name="location" size={18} color="#BDBDBD" style={{ marginRight: 4 }} />
                      </TouchableOpacity>
                      <Text style={styles.locationTitle}>{item.locationTitle}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )} />
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

  avatarWrapper: {
    position: "absolute",
    top: -100,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  cancelImgIcon: {
    position: "absolute",
    top: -50,
    left: 107,
    zIndex: 100,
    // marginTop: '65%',
    // left: '90%',
  },

  profileWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 147,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",
  },

  profile: {
    position: "relative",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",
  },

  profileName: {
    marginTop: 32,
    marginBottom: 32,
    // fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    color: "#212121",
    textAlign: "center",
  },


  postsWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  postItem: {
    marginBottom: 32,
  },

  postTitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  postImg: {
    width: 383,
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },

  postInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  commentQuantity: {
    fontSize: 16,
    lineHeight: 19,

  },

  locationInfoWrapper: {
    flexDirection: "row",
  },

  locationTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    textDecorationLine: "underline",
    color: "#212121"
  },
})

