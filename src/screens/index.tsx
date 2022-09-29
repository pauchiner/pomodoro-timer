import { useContext } from "react";
import { Context } from "../store/context";

//Screens
import MainScreen from "./main";
import SettingsScreen from "./settings";

const Routes = () => {
  const { route }: any = useContext(Context);
  switch (route) {
    case "main":
      return <MainScreen />;
    case "settings":
      return <SettingsScreen />;
    default:
      return <MainScreen />;
  }
};

export default Routes;
