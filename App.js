import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import { ApiContext } from "./Context/ApiContext";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [travelTimeInformation, setTravelTimeInformation] = useState({});
  const api = "AIzaSyDu4xxFv-PGbEns9cDKMnSH-Ol3aaTxVYQ";

  return (
    <ApiContext.Provider
      value={{
        origin,
        setOrigin,
        destination,
        setDestination,
        travelTimeInformation,
        setTravelTimeInformation,
        api,
      }}
    >
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </ApiContext.Provider>
  );
}
