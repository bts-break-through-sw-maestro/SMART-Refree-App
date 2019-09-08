import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
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
        headerMode: "none",
        mode: "modal",
        initialRouteName: "Main"
    }
);

export default createAppContainer(AppNavigation);
