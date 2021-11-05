import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BLACK_COLOR } from "../assets/colors/colors";
import auth from "@react-native-firebase/auth";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  align-items: center;
  color: white;
  padding: 60px 20px;
`;
const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  border-width: 1px;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordInput = useRef();
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus();
  };
  const onSubmitPasswordEditing = async () => {
    if (email === "" || password === "") {
      return Alert.alert("Fill in the form.");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password": {
          Alert.alert("Write a stronger password!");
        }
      }
    }
  };

  return (
    <Container>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        returnKeyType="next"
        onChangeText={text => setEmail(text)}
        onSubmitEditing={onSubmitEmailEditing}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={text => setPassword(text)}
        onSubmitEditing={onSubmitPasswordEditing}
      />
      <Btn onPress={onSubmitPasswordEditing}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <BtnText>Create Account</BtnText>
        )}
      </Btn>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
      />
    </Container>
  );
};

export default Join;
