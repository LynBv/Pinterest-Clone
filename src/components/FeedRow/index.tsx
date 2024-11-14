import { View, ImageSourcePropType } from "react-native";
import React from "react";
import { FeedImg } from "../FeedImg";
import { styles } from "./style";


interface PropsApi {
  id: number;
  image: ImageSourcePropType;
  uri: string;
}

interface ArrayPropsApi {
  imgFeed: PropsApi[];
}

export const FeedRow = ({ imgFeed }: ArrayPropsApi) => {

  const gerarFeed = imgFeed.map((img) => <FeedImg key={img.id} data={img}/> )
  return (
      <View style={styles.container}>{gerarFeed}</View>
  );
  
};

 {/* <FlatList
      data={imgFeed}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FeedImg data={item} />} 
    ></FlatList> */}

