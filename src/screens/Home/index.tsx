import { View, Text, ScrollView } from "react-native";
import { DataAPI } from "../../mock/Data/DataApi";
import { DataAPI2 } from "../../mock/Data/DataApi2";
import { FeedRow } from "../../components/FeedRow";
import { styles } from "./style";
import { CategoriesBar } from "../../components/CategoriesBar";
import { NavBar } from "../../components/NavBar";

export const Home = () => {
  return (
    <View style={styles.main}>
      <CategoriesBar />
      <ScrollView>
        <View style={styles.container}>
          <FeedRow imgFeed={DataAPI} />
          <FeedRow imgFeed={DataAPI2} />
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};
