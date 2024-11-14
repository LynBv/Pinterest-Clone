import { Modal, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LoginInput } from "../../components/LoginInput";
import { LoginButton } from "../../components/LoginButton";
import { styles } from "./style";
import { LoginButtonFacebook } from "../LoginButtonFacebook";
import { LoginButtonGoogle } from "../LoginButtonGoogle";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import IconA from "@expo/vector-icons/FontAwesome5";

interface PropsModal {
  openModal: boolean;
  emailValue: string;
  passwordValue: string;
  handleModal: (value: boolean) => void;
  handleEmail: (value: string) => void;
  handlePassword: (value: string) => void;
}

export const LoginModal = ({
  openModal,
  emailValue,
  passwordValue,
  handleModal,
  handleEmail,
  handlePassword,
}: PropsModal) => {
  const [viewPassword, setViewPassword] = useState<boolean>(true);

  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.container}>
        <View style={styles.exitBar}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => handleModal(!openModal)}
          >
            <IconM name="close" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </View>

        <View style={styles.boxForms}>
          <LoginButtonFacebook handleFunction={() => handleModal(!openModal)} />
          <LoginButtonGoogle handleFunction={() => handleModal(!openModal)} />

          <Text style={styles.textoOu}>Ou</Text>

          <View style={styles.inputArea}>
            <LoginInput
              isSecurity={false}
              placeHolder="Endereço de email"
              handleFunctionInput={handleEmail}
              valueImput={emailValue}
            />
            <View style={styles.senhaArea}>
              <LoginInput
                isSecurity={viewPassword}
                placeHolder="Insira sua senha"
                handleFunctionInput={handlePassword}
                valueImput={passwordValue}
              />
              <TouchableOpacity
                style={styles.iconSenha}
                onPress={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? (
                  <IconM name="eye" size={30} color="#636363" />
                ) : (
                  <IconM name="eye-off" size={30} color="#636363" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <LoginButton
            title="Entrar"
            propsBackgroundColor="#cf0c1f"
            handleFunction={() => handleModal(!openModal)}
            propsFontColor="white"
          />

          <Text style={styles.textoSenha}>Esqueceu a senha?</Text>
        </View>
      </View>
    </Modal>
  );
};
