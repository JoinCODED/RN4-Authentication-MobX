import { createStackNavigator } from "react-navigation-stack";

import Home from "../Components/Home";
import IcecreamList from "../Components/IcecreamList";
import IcecreamDetail from "../Components/IcecreamDetail";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const StackNav = createStackNavigator(
  {
    HomeScreen: Home,
    ListScreen: IcecreamList,
    DetailScreen: IcecreamDetail,
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

export default StackNav;
