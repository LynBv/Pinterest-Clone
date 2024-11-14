import { Text, View } from "react-native";
import React from "react";
import { styles } from "./style";
import IconM from '@expo/vector-icons/MaterialCommunityIcons';

export const CategoriesBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.categoriaPrincipal} >Tudo</Text>
        
      </View>
      <Text style={styles.categorias}>Comida</Text>
      <Text style={styles.categorias}>Paisagens</Text>
      <Text style={styles.categorias}>Animais</Text>
    </View>
  );
};
