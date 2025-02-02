import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 28,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(242, 236, 231, .2)",
    borderStyle: "solid",
  },
  language: {
    width: 120,
    textAlign: "center",
    fontFamily: "AvenirNextCyr-Medium",
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
});
