import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    paddingBottom: 20,
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
    boxShadow: "inset 0 0 5 rgba(255, 255, 255, .25)",
  },
  wrapper: {
    flex: 1,
  },
  initial: {
    gap: 20,
    padding: 12,
  },
  top: {
    flexDirection: "row",
  },
  bottom: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontWeight: 500,
    letterSpacing: 1,
    color: "#F2ECE7",
  },
  buttons: {
    width: 32,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  copyImage: {
    width: 24,
    height: 24,
  },
  recordImage: {
    width: 32,
    height: 32,
  },
  recordingButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    boxShadow: "inset 0 0 5 rgba(255, 255, 255, .25)",
  },
});
