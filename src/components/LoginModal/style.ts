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
    marginTop: 10,
    marginBottom: 30,
    width: "90%",
    borderBottomWidth: 2,
    borderColor: "#d7ddda",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },

  exitButton: {
    fontWeight: "bold",
    fontSize: 20,
  },

  inputArea: {
    width: "100%",
    gap: 5
  },

  senhaArea:{
    flexDirection: "row"
  },

  textoOu: {
    marginTop: 10,
    marginBottom: 10,
  },

  textoSenha: {
    color: "#636363", 
    fontSize: 15
  },

  textoEntrar: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 20,
  },

  icon:{
    position: 'absolute',
    left: 5,
    top:10,
  },

  iconSenha:{
    position: 'absolute',
    right: 7,
    top:10,
  }
});
