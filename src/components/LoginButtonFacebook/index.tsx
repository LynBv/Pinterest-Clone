import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PropsButton } from "./type";
import { styles } from "./style";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";

export const LoginButtonFacebook = ({
  handleFunction,
}: PropsButton) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.styleButton, { backgroundColor: "#1877f2" }]}
        onPress={handleFunction}
      >
        <View style={styles.icon}>
          <IconM name="facebook" size={30} color="#FFF" style={styles.icon} />
        </View>
        <Text
          style={[
            styles.text,
            { color: "white" },
          ]}
        >
          Continuar com o Facebook
        </Text>
      </TouchableOpacity>
    </>
  );
};
