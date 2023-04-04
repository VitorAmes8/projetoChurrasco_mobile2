import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  boxDados: {
    borderColor: '#fff',
    padding: 20,
    borderWidth: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    flex: 1,
    alignContent: "center",
    flexBasis: "auto",
    flexGrow: 1,
    flexShrink: 1,

  },

  boxCard: {
    backgroundColor: '#ddf2ed',
    minWidth: 150,
    maxWidth: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    flex: 1,
    alignContent: "center",
    flexBasis: "auto",
    flexGrow: 1,
    flexShrink: 1
  },

  boxCardIcone: {
    width: 30,
    height: 30,
    marginRight: 10,
    color: '#00a79d'
  },

  boxCardTexto: {
    color: '#00a79d',
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5
  },

  boxCardValor: {
    color: '#00a79d',
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5
  },
});

export default estilo;
