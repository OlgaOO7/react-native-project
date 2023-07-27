import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import MapScreen from './MapScreen';

export const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);
  const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState('');


    let photo = false;

    useEffect(() => {
      try {
        (async () => {
          let {status} = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.log("Please grant location permission");
          }
  
          let currentLocation = await Location.getCurrentPositionAsync({});
          setLocation(currentLocation);
        })();
      } catch (error) {
        console.log(error.message);
      }
    }, []);

    const handleShowKeyboard = () => {
      setIsShowKeyboadr(true);
    };
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#212121" style={styles.iconBack} />
        </TouchableHighlight>
        <Text style={styles.headerText}>Створити публікацію</Text>
      </View> */}
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
          <View style={styles.placeWrapper}>
            <EvilIcons name="location" size={24} color="black" />
            <TextInput placeholder={"Місцевість..."} placeholderTextColor={"#BDBDBD"} inputMode={'url'} style={styles.inputText} value={locationName} onFocus={() => {
                    handleShowKeyboard();
                  }}
              onChangeText={(locationName) => setLocationName(locationName)} />
          </View>
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
    </TouchableWithoutFeedback>
  )

  // // const [photo, setPhoto] = useState(false);
  // const [selectedLocation, setSelectedLocation] = useState(null);
  // const [locationName, setLocationName] = useState('');

  // let photo = false;

  // // const handleLocation = async() => {
  // //   const location = await Location.getCurrentPositionAsync();
  // //   navigation.navigation('', {      
  // //     latitude: location.coords.latitude,
  // //     longitude: location.coords.longitude,
  // //   })
  // // }

  // const handleGeolocatePress = () => {
  //   navigation.navigate('MapScreen', {
  //     selectedLocation,
  //     setSelectedLocation,
  //   });
  // };

  // // Function to perform reverse geocoding and get the location name
  // const reverseGeocode = async (latitude, longitude) => {
  //   try {
  //     const apiKey = 'AIzaSyC8YUO74K9Bg-Ysw3Ia5FOTuv3se79XM0Y';
  //     const response = await axios.get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
  //     );
  //     if (response.data.results.length > 0) {
  //       setLocationName(response.data.results[0].formatted_address);
  //     }
  //   } catch (error) {
  //     console.log('Error getting location name:', error);
  //   }
  // };

  // // Update the location name when selectedLocation changes
  // useEffect(() => {
  //   if (selectedLocation) {
  //     reverseGeocode(selectedLocation.latitude, selectedLocation.longitude);
  //   }
  // }, [selectedLocation]);


  // return (
  //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //     <View style={styles.container}>
  //       {/* <View style={styles.header}>
  //       <TouchableHighlight onPress={() => navigation.goBack()}>
  //         <AntDesign name="arrowleft" size={24} color="#212121" style={styles.iconBack} />
  //       </TouchableHighlight>
  //       <Text style={styles.headerText}>Створити публікацію</Text>
  //     </View> */}
  //       <KeyboardAvoidingView
  //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
  //       </KeyboardAvoidingView>
  //       <View style={styles.imgWrapper}>
  //         <View style={styles.imgCircle}>
  //           <Image source={require('../assets/camera.png')} style={styles.imageCamera} />
  //         </View>
  //       </View>
  //       <Text style={styles.downloadText}>{!photo ? "Завантажте фото" : "Реадагувати фото"}</Text>
  //       <View style={styles.inputWrapper}>
  //         <TextInput placeholder={"Назва..."} placeholderTextColor={"#BDBDBD"} inputMode={'text'} style={styles.inputText} />
  //         <View style={styles.placeWrapper}>
  //           <EvilIcons name="location" size={24} color="black" />
  //           <TextInput placeholder={"Місцевість..."} placeholderTextColor={"#BDBDBD"} inputMode={'url'} style={styles.inputText} value={locationName}
  //             onChangeText={setLocationName} />
  //         </View>
  //       </View>
  //       <TouchableOpacity
  //         onPress={handleGeolocatePress}
  //         style={{
  //           backgroundColor: 'white',
  //           padding: 10,
  //           borderRadius: 5,
  //           borderColor: '#E8E8E8',
  //           borderWidth: 1,
  //         }}
  //       >
  //       </TouchableOpacity>
  //       <Text>Geolocate</Text>
  //       <TouchableOpacity activeOpacity={0.8} style={styles.publicBtn}>
  //         <Text style={styles.publicateText}>Опублікувати</Text>
  //       </TouchableOpacity>
  //       <View style={styles.footer}>
  //         <TouchableHighlight style={styles.deleteBtn}>
  //           <AntDesign name="delete" size={24} color="#BDBDBD" />
  //         </TouchableHighlight>
  //       </View>
  //     </View>
  //   </TouchableWithoutFeedback>
  // )
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


