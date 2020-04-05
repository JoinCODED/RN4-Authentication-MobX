import { createStackNavigator } from "react-navigation-stack";

import Login from "../Components/Login";
import Signup from "../Components/Signup";

const AuthNav = createStackNavigator(
  {
    LoginScreen: Login,
    SignupScreen: Signup
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#90d4ed"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthNav;
