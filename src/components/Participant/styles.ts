import { StyleSheet } from "react-native";

export const { container, nameText, button, buttonText } = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },

  nameText: {
    color: "#FFF",
    flex: 1,
    paddingLeft: 7,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
    lineHeight: 27,
    fontWeight: "400",
  },
});
