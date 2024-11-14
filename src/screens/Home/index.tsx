import { View, Text, ScrollView } from 'react-native'
import { DataAPI } from "../../mock/Data/DataApi";
import { FeedRow } from '../../components/FeedRow'
import { styles } from "./style";

export const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <FeedRow imgFeed={DataAPI}/>
      <FeedRow imgFeed={DataAPI}/>
      </View>
    </ScrollView>
  )
}

