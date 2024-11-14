import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  boxForms: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    borderRadius: 10,
  },

  exitBar: {
    marginTop: 30,
    marginBottom: 30,
    width: "90%",
    borderBottomWidth: 2,
    borderColor: "#d7ddda",
    alignItems: "center",
    flexDirection: "row",
  },

  exitButton: {
    fontWeight: "bold",
    fontSize: 20,
  },

  inputArea: {
    width: "100%",
  },

  textoOu: {
    marginTop: 10,
    marginBottom: 10,
  },

  textoEntrar: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 20,
  },
});
