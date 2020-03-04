import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(100, 40, 60, .4)"
  },
  topStyling: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center"
  },
  homeTitle: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255, 255, 255, .1)"
  },
  listStyling: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyling: {
    justifyContent: "center",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonTextStyling: {
    fontSize: 20,
    color: "#fff"
  },

  flavorList: {
    textAlign: "left",
    color: "#6C788E",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  icecreamImage: {
    height: 230,
    width: 350
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "white",
    fontStyle: "italic",
    fontFamily: "Baskerville"
  },
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#90d4ed",
    marginTop: 30
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60
  },
  authOther: {
    color: "#90d4ed",
    marginTop: 15
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "#90d4ed",
    borderBottomColor: "#90d4ed",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "#90d4ed",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "#90d4ed"
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "#90d4ed",
    fontSize: 16
  }
});

export default styles;
