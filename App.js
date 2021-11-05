import React from "react";
import auth from "@react-native-firebase/auth";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import InNav from "./navigations/InNav";
import OutNav from "./navigations/OutNav";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLogin ? <InNav /> : <OutNav />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
