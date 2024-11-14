import { Image, Text, View} from 'react-native'
import React from 'react'
import {styles} from "./style"
import IconM from '@expo/vector-icons/MaterialCommunityIcons';
import IconA from '@expo/vector-icons/FontAwesome5';
import avatar from "../../assets/avatar.jpg"

export const NavBar = () => {
  return (
    <View style={styles.container}>
      <IconM name="home-variant" size={30} color="#000" />
      <IconA name="search" size={28} color="#8b8b8b" />
      <IconA name="plus" size={28} color="#8b8b8b"  />
      <IconM name="chat-processing" size={30} color="#8b8b8b" />
      <Image source={avatar} style={styles.avatar}/>
    </View>
  )
}