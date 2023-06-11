import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Feather, EvilIcons } from '@expo/vector-icons';
import { StyleSheet, ScrollView, View, Text, Image, FlatList } from "react-native";

export const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();

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
      <FlatList
        data={posts}
        style={{ marginBottom: 43 }}
        renderPost={({ item }) => (
          <View style={styles.postsWrapper}>
            <View style={styles.postItem}>
              <Image source={{ uri: item.photo }} style={styles.postImg} />
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
        )}
      />
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

