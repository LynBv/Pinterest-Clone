import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PropsButton } from "./type";
import { styles } from "./style";
import logo from "../../assets/Google_logo.svg.png"

export const LoginButtonGoogle = ({
  handleFunction,
}: PropsButton) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.styleButton, { backgroundColor: "#d3d2d2" }]}
        onPress={handleFunction}
      >
        <View style={styles.icon}>
          <Image source={logo} style={styles.icon}/>
        </View>
        <Text
          style={[
            styles.text,
            { color: "black" },
          ]}
        >
        Continuar com o Google
        </Text>
      </TouchableOpacity>
    </>
  );
};
