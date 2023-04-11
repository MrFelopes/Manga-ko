import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  widthFull:{
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFullWidth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  box: {
    maxWidth: 300,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eeeee4",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  imgRedonda: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px",
  },
});
