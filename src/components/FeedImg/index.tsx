import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ImageBackground,
  Dimensions,
} from "react-native";
import { styles } from "./style";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";

interface PropsApi {
  data: {
    id: number;
    image: ImageSourcePropType;
    uri: string;
  };
}

export const FeedImg = ({ data }: PropsApi) => {
  const window = Dimensions.get("window");

  let imgAsset = Image.resolveAssetSource(data.image);
  let nearlyContainerWidth = window.width / 2;
  let aspectRatio = imgAsset.height / imgAsset.width;
  let idealHeight = nearlyContainerWidth * aspectRatio;

  return (
    <View style={styles.container}>
      <Image
        source={data.image}
        style={[{ height: idealHeight }, styles.feedImg]}
        alt="Imagem do feed"
      ></Image>
      <View style={styles.info}>
        <IconM name="dots-horizontal" size={28} color="#000" />
      </View>
    </View>
  );
};
