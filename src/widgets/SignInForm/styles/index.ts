import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 22,
    letterSpacing: 1,
    textAlign: "center",
  },
  inputs: {
    gap: 20,
    marginTop: 32,
    marginBottom: 32,
  },
  alternatives: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(242, 236, 231, .2)",
    borderStyle: "solid",
  },
  buttons: {
    gap: 8,
  },
  signIn: {
    color: "#fff",
  },
  signUp: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
