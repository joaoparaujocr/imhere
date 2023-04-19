import { StyleSheet } from "react-native";

export const {
  container,
  dateEvent,
  nameEvent,
  input,
  button,
  buttonText,
  form,
} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 24,
  },

  nameEvent: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 48,
  },

  dateEvent: {
    color: "#fff",
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    fontSize: 18,
    paddingLeft: 7,
    color: "#fff",
    marginTop: 4,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
    lineHeight: 27,
    fontWeight: "400",
  },

  form: {
    marginVertical: 30,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
});
