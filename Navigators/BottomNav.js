import { createBottomTabNavigator } from "react-navigation-tabs";
import AuthNav from "./AuthNav";
import StackNav from "./StackNav";

const BottomNav = createBottomTabNavigator({
  Auth: AuthNav,
  App: StackNav
});

export default BottomNav;
