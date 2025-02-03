import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 86,
    gap: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#F2ECE7",
  },
  arrow: {
    width: 20,
    height: 20,
  },
  words: {
    height: 50,
  },
});
