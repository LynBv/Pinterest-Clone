import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { PropsButton } from "./type";
import { styles } from "./style";

export const LoginButton = ({
  title,
  propsBackgroundColor,
  handleFunction,
  propsFontColor
}: PropsButton) => {

  return (

    <>
      <TouchableOpacity
        style={[ styles.styleButton,{ backgroundColor: propsBackgroundColor}]}
        onPress={handleFunction}>

        <Text style={[styles.text, {color: propsFontColor? propsFontColor : "black"}]}>{title}</Text>

      </TouchableOpacity>
    </>

  );
};
