import { View, Text, Image, ImageSourcePropType, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { styles } from "./style";

interface PropsApi {
  data: {
    id: number;
    image: ImageSourcePropType;
    uri: string;
  }
}


export const FeedImg = ({data}: PropsApi) => {
  const window = Dimensions.get('window');
  
  let imgAsset = Image.resolveAssetSource(data.image);
  let nearlyContainerWidth = (window .width/ 2);
  let aspectRatio = imgAsset.height / imgAsset.width;
  let idealHeight = nearlyContainerWidth * aspectRatio

  return (
    <View key={data.id} style={styles.container}>
      <Image source={data.image} style={[{height: idealHeight}, styles.feedImg]} alt="Imagem do feed"></Image>
    </View>
  )
}
