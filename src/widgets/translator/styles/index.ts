import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 236, 231, .2)",
    borderStyle: "solid",
    backgroundColor: "rgba(242, 236, 231, .1)",
  },
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
  content: {
    padding: 12,
  },
  input: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 500,
    letterSpacing: 1,
    color: "#F2ECE7",
  },
});
