import { createSwitchNavigator } from "react-navigation";

import AuthNav from "./AuthNav";
import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator({
  AuthNav: AuthNav,
  StackNav: StackNav
});

export default SwitchNav;
