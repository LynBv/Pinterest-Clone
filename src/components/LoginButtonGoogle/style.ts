import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  text: {
    color: "#fff",
    fontSize: width < 767 ? 15 : 30,
    fontWeight: "bold",
  },

  icon:{
    width:28,
    height: 28,
    position: 'absolute',
    left: 5,
    top:5,
  }
});