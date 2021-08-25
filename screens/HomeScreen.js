import React, { useContext } from "react";
import { SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ApiContext } from "../Context/ApiContext";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  const { setOrigin, setDestination, api } = useContext(ApiContext);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: { flex: 0 },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            });
            setDestination(null);
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: api,
            language: "en",
          }}
          placeholder="where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
