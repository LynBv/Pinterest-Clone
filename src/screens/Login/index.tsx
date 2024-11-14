import {
  ImageBackground,
  Keyboard,
  Linking,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { LoginInput } from "../../components/LoginInput";
import { styles } from "./style";
import { LoginButton } from "../../components/LoginButton";
import { WelcomeTitle } from "../../components/WelcomeTitle";
import { LoginModal } from "../../components/LoginModal";
import  background  from "../../assets/background.png";
import { LoginButtonFacebook } from "../../components/LoginButtonFacebook";
import { LoginButtonGoogle } from "../../components/LoginButtonGoogle";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleContinuar = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.boxForms}>
            <WelcomeTitle />

            <View style={styles.input}>
              <LoginInput
                isSecurity={false}
                placeHolder="Endereço de email"
                handleFunctionInput={handleEmail}
                valueImput={email}
              />
            </View>

            <LoginButton
              title="Continuar"
              propsBackgroundColor="#be0215"
              handleFunction={() => setOpenModal(!openModal)}
              propsFontColor="white"
            />

            <View style={styles.logarRedeSocial}>
              <LoginButtonFacebook
                handleFunction={handleContinuar}
              />
              <LoginButtonGoogle handleFunction={handleContinuar}/>
            </View>

            <Text style={styles.termosDeUso}>
              Ao continuar você concorda com os{" "}
              <Text style={styles.span} onPress={()=> Linking.openURL("https://policy.pinterest.com/pt-br/terms-of-service")} >
                Termos de Serviço{" "}</Text>
               do Pinterest e confirma que leu a nossa{" "} 
              <Text style={styles.span} onPress={()=> Linking.openURL("https://policy.pinterest.com/pt-br/notice-at-collection")}>
                 Política de Privacidade. Aviso na coleta de informações
              </Text>
            </Text>

            {openModal && (
              <LoginModal
                openModal={openModal}
                handleModal={setOpenModal}
                emailValue={email}
                handleEmail={handleEmail}
                passwordValue={password}
                handlePassword={handlePassword}
              />
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
