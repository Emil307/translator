import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginTop: 20,
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
    color: "#fff",
  },
  arrow: {
    width: 20,
    height: 20,
  },
  words: {
    flexDirection: "row",
    gap: 8,
  },
});
