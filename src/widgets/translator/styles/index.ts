import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 236, 231, .2)",
    borderStyle: "solid",
    backgroundColor: "rgba(242, 236, 231, .1)",
    marginTop: 20,
    flex: 1,
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
    color: "#fff",
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
