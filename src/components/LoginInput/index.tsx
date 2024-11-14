import {TextInput } from "react-native";
import React from "react";
import { styles } from "./style";
import { PropsInput } from "./type";
import { LoginButton } from "../LoginButton";

export const LoginInput = ({
  placeHolder,
  isSecurity,
  valueImput,
  handleFunctionInput,
}: PropsInput) => {

  return (

    <>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor="#6e6d6d"
        style={styles.input}
        secureTextEntry={isSecurity}
        value={valueImput}
        onChangeText={handleFunctionInput}
      />
      
    </>

  );
};
