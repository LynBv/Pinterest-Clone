import { Modal, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LoginInput } from "../../components/LoginInput";
import { LoginButton } from "../../components/LoginButton";
import { styles } from "./style";

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

  return (
    <Modal visible={openModal} animationType="slide" >
      <View style={styles.container}>
        <View style={styles.exitBar}>
          <TouchableOpacity onPress={() => handleModal(!openModal)}>
            <Text style={styles.exitButton}>X</Text>
          </TouchableOpacity>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </View>

        <View style={styles.boxForms}>
          <LoginButton
            title="Continuar com o Facebook"
            propsBackgroundColor="#1877f2"
            handleFunction={() => handleModal(!openModal)}
            propsFontColor="white"
          />
          <LoginButton
            title="Continuar com o Google"
            propsBackgroundColor="#d7ddda"
            handleFunction={() => handleModal(!openModal)}
          />

          <Text style={styles.textoOu}>Ou</Text>

          <View style={styles.inputArea}>
            <LoginInput
              isSecurity={false}
              placeHolder="Endereço de email"
              handleFunctionInput={handleEmail}
              valueImput={emailValue}
            />
            <LoginInput
              isSecurity={true}
              placeHolder="Insira sua senha"
              handleFunctionInput={handlePassword}
              valueImput={passwordValue}
            />
          </View>

          <LoginButton
            title="Entrar"
            propsBackgroundColor="#cf0c1f"
            handleFunction={() => handleModal(!openModal)}
            propsFontColor="white"
          />

          <Text>Esqueceu a senha?</Text>
        </View>
      </View>
    </Modal>
    
  );
};
