import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BLACK_COLOR } from "../assets/colors/colors";
import Detail from "../components/Detail";
import Home from "../screens/Home";

const Nav = createNativeStackNavigator();

const InNav = () => (
  <Nav.Navigator
    screenOptions={{
      presentation: "modal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: BLACK_COLOR,
      },
    }}
  >
    <Nav.Screen name="Coin" component={Home} />
    <Nav.Screen name="Detail" component={Detail} />
  </Nav.Navigator>
);

export default InNav;
