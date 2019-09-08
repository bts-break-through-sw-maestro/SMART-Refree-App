import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { headerStyles } from "./config";

import MainNavigation from "./MainNavigation";
import ModalScreen from "../screens/Modal";

export const AppNavigation = createStackNavigator(
    {
        Main: MainNavigation,
        Modal: {
            screen: ModalScreen
        }
    },
    {
        mode: "modal",
        headerMode: "None",
        initialRouteName: "Main"
    }
);

export default createAppContainer(AppNavigation);
