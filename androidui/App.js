import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./src/screens/Profile";
import ProfileDetail from "./src/screens/ProfileDetails";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}