import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { headerStyles } from "./config";
import Avatar from "../components/Avatar";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import ForgetScreen from "../screens/Forget";
import HomeScreen from "../screens/Home";
import MenuScreen from "../screens/Menu";
import PlayScreen from "../screens/Play";

const MainNavigation = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
                ...headerStyles
            }
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: {
                title: "Sign Up",
                ...headerStyles
            }
        },
        Forget: {
            screen: ForgetScreen,
            navigationOptions: {
                title: "Forget",
                ...headerStyles
            }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Smart Referee",
                headerRight: <Avatar />,
                ...headerStyles
            }
        },
        Menu: {
            screen: MenuScreen,
            navigationOptions: {
                title: "Menu",
                headerRight: <Avatar />,
                ...headerStyles
            }
        },
        Play: {
            screen: PlayScreen,
            navigationOptions: {
                title: "Play",
                headerRight: <Avatar />,
                ...headerStyles
            }
        }
    },
    {
        initialRouteName: "Menu",
        headerBackTitleVisible: false
    }
);

export default createAppContainer(MainNavigation);
