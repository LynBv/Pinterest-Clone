import { Text, View} from 'react-native'
import React from 'react'
import {styles} from "./style"

export const CategoriesBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.categorias}>Tudo</Text>
        <Text style={styles.categorias}>Comida</Text>
        <Text style={styles.categorias}>Paisagens</Text>
        <Text style={styles.categorias}>Animais</Text>
    </View>
  )
}