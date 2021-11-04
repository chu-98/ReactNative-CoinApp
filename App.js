import React from "react";
import auth from "@react-native-firebase/auth";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import InNav from "./navigations/InNav";
import OutNav from "./navigations/OutNav";

export default function App() {
  const [isLogin, setLogIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    });
  });
  return (
    <NavigationContainer>
      {isLogin ? <InNav /> : <OutNav />}
    </NavigationContainer>
  );
}
