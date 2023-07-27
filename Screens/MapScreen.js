import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const MapScreen = ({
  route: {
    params: {
      location: {
        coords: { latitude, longitude },
      },
    },
  },
}, navigation) => {

  return (
    <View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
          <Marker coordinate={{latitude, longitude}} pinColor="blue" title = "create post photo" />
      </MapView>
    </View >
  )



  // const [initialRegion, setInitialRegion] = useState({
  //   latitude: 0,
  //   longitude: 0,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });

  //   // State to hold the location name entered by the user
  //   const [locationName, setLocationName] = useState('');

  // const [selectedLocation, setSelectedLocation] = useState(null);


  // // Function to get user's current location
  // const getPermission = async () => {
  //   try {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log('Please grant location permission');
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = location.coords;
  //     setInitialRegion({
  //       latitude,
  //       longitude,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     });
  //   } catch (error) {
  //     console.log('Error getting location:', error);
  //   }
  // };

  // // Function to handle the user's marker selection
  // const handleMarkerPress = (event) => {
  //   const { coordinate } = event.nativeEvent;
  //   setSelectedLocation(coordinate);
  // };

  // const handleGeolocatePress = async () => {
  //   try {
  //     // Use the geocoding service (e.g., Google Maps Geocoding API) to convert locationName to coordinates
  //     const apiKey = 'AIzaSyC8YUO74K9Bg-Ysw3Ia5FOTuv3se79XM0Y';
  //     const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //       locationName
  //     )}&key=${apiKey}`;

  //     const response = await fetch(geocodeUrl);
  //     const data = await response.json();

  //     // Check if the geocoding service returned valid results
  //     if (data.results && data.results.length > 0) {
  //       const { lat, lng } = data.results[0].geometry.location;
  //       setSelectedLocation({ latitude: lat, longitude: lng });
  //     } else {
  //       console.log('Location not found');
  //     }
  //   } catch (error) {
  //     console.log('Error geocoding location:', error);
  //   }
  // };


  // // Request the user's current location on component mount
  // useEffect(() => {
  //   getPermission();
  // }, []);

  // return (
  //   <View>
  //     <MapView
  //       style={{ flex: 1 }}
  //       region={initialRegion}
  //       onRegionChange={(region) => setInitialRegion(region)}
  //       onPress={handleMarkerPress}
  //     >
  //       {selectedLocation && (
  //         <Marker coordinate={selectedLocation} pinColor="blue" />
  //       )}
  //     </MapView>
  //     <TextInput
  //       placeholder={"Enter location name..."}
  //       placeholderTextColor={"#BDBDBD"}
  //       inputMode={'url'}
  //       style={{
  //         backgroundColor: 'white',
  //         padding: 10,
  //         position: 'absolute',
  //         bottom: 80,
  //         right: 20,
  //         borderRadius: 5,
  //         borderColor: '#E8E8E8',
  //         borderWidth: 1,
  //       }}
  //       value={locationName}
  //       onChangeText={setLocationName}
  //     />
  //     <TouchableOpacity
  //       onPress={handleGeolocatePress}
  //       style={{
  //         backgroundColor: 'white',
  //         padding: 10,
  //         position: 'absolute',
  //         bottom: 20,
  //         right: 20,
  //         borderRadius: 5,
  //       }}
  //     >
  //         <Text>Geolocate</Text>
  //     </TouchableOpacity>
  //   </View>
  // )
}

export default MapScreen;