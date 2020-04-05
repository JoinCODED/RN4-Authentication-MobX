import { createStackNavigator } from "react-navigation-stack";

import Home from "../Components/Home";
import IcecreamList from "../Components/IcecreamList";
import IcecreamDetail from "../Components/IcecreamDetail";

const StackNav = createStackNavigator(
  {
    HomeScreen: Home,
    ListScreen: IcecreamList,
    DetailScreen: IcecreamDetail
  },
  {
    initialRouteName: "HomeScreen",
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
