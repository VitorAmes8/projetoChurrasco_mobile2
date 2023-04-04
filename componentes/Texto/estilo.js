import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  boxTexto: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center"
  },

  boxTextoTitulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 20
  },

  boxTextoSubtitulo: {
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 10
  },
});

export default estilo;
