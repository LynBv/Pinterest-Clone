import { View, Text, Image } from 'react-native'
import React from 'react'
import Logo from "../../assets/pinterest_logo.png"
import {styles} from "./style"

export const WelcomeTitle = () => {
  return (
    <View style={styles.welcomeBox}>
      <Image source={Logo} style={styles.avatarImage}/>
      <Text style={styles.text}>{"Bem vindo(a) ao Pinterest"}</Text>
    </View>
  )
}