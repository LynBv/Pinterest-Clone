import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },

  feedImg: {
    borderRadius: 10,
    width: "100%",
    resizeMode: "cover",
    /*flex: 1,
    borderRadius: 10,
    objectFit: "fill",
    maxHeight: 400,
    borderWidth: 1,
    borderColor: "#000" */
  },

  info:{
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",

  }
});
