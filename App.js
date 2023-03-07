//cd ReactNativeThapa/myApp
//npx expo start
import React from "react";
import FlatListDemo from "./src/screens/FlatListDemo";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sample from "./src/screens/Sample";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={FlatListDemo} />
        <Stack.Screen name="Basic" component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
