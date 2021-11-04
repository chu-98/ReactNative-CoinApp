import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BLACK_COLOR } from "../assets/colors/colors";

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

  const passwordInput = useRef();
  const goNext = () => {
    passwordInput.current.focus();
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
        onSubmitEditing={goNext}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={text => setPassword(text)}
      />
      <Btn>
        <BtnText>Create Account</BtnText>
      </Btn>
    </Container>
  );
};

export default Join;
