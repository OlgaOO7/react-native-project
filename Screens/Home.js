import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { View, TouchableOpacity } from "react-native";

const MainTab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <MainTab.Navigator initialRouteName="Posts"
      screenOptions={{
        // headerShown: false,
        headerTititleStyle: {
          fontWeight: 500,
          fontSize: 17,
          lineHeight: 22,
          textAlign: "center",
          letterSpacing: -0.41,
          color: "#212121",
        },
        tabBarShowLabel: false,
        tabBarStyle: { height: 83, paddingBottom: 40, paddingTop: 9 },
      }}
    >

      <MainTab.Screen name="Posts" component={PostsScreen}
        options={{
          // headerShown: false,
          title: "Публікації",
          headerRight: ({ focused, color, size }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("LogIn")} style={{
              paddingVertical: 11,
              marginRight: 16,
              background: "#FFFFFF",
            }}>
              <MaterialCommunityIcons name="exit-to-app" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 31, }}>
                <TouchableOpacity activeOpacity={0.8} onPres={() => navigation.navigate("PostsScreen")}>
                  <Ionicons name="grid-outline" size={24} color="rgba(33, 33, 33, 0.8)" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      ></MainTab.Screen>

      <MainTab.Screen name="CreatePosts" component={CreatePostsScreen} options={{
        title: "Створити публікацію",
        tabBarStyle: { display: 'none' },
        headerLeft: ({ focused, color, size }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Posts")} style={{ marginLeft: 16 }}>
            <AntDesign name="arrowleft" size={24} color="#212121" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View>
              {/* <TouchableOpacity activeOpacity={0.8} onPres={() => navigation.navigate("PostsScreen")}>
                <AntDesign name="delete" size={24} color="#BDBDBD" />
              </TouchableOpacity> */}
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("CreatePosts")} style={{
                width: 70,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FF6C00",
                borderRadius: 20,
              }}>
                <Feather name="plus" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          );
        },
      }}>
      </MainTab.Screen>

      <MainTab.Screen name="Profile" component={ProfileScreen}
        options={{
                  headerShown: false,
          // tabBarStyle: { display: 'none' },
          // headerRight: ({ focused, color, size }) => (
          //   <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("LogIn")} style={{
          //     paddingVertical: 11,
          //     marginRight: 16,
          //     background: "#FFFFFF",
          //   }}>
          //     <MaterialCommunityIcons name="exit-to-app" size={24} color="#BDBDBD" />
          //   </TouchableOpacity>
          // ),
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Profile")}>
                  <AntDesign name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
                </TouchableOpacity>
              </View>
            );
          },
        }}>
      </MainTab.Screen>
    </MainTab.Navigator>
  )
};

export default Home;




