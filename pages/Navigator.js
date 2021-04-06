/*This page is for navigation is like a root on our application
Make sure every package is on your computer before running

Requirements:
-package npm install @react-navigation/stack
-import from folder pages {Login/indexM/ Camera}
*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import index from "./indexM";
import Camera from "./Camera";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTitleStyle: {
          fontStyle: "normal",
          fontFamily: "Pacifico",
          fontSize: 30,
          fontWeight: "bold",
          height: 60,
        },
        headerTintColor: "#ffd700",
        headerTitleAlign: "center",
      }}
    >
      {/*The title redesigned*/}

      <Stack.Screen
        name="Gryffindor"
        component={Login}
        options={{
          title: (
            <Image
              source={require("../assets/title.png")}
              style={{ height: 40, width: 180 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="About us"
        component={index}
        options={{
          title: (
            <Image
              source={require("../assets/title.png")}
              style={{ height: 40, width: 180 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="camera"
        component={Camera}
        options={{
          title: (
            <Image
              source={require("../assets/title.png")}
              style={{ height: 40, width: 180 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
