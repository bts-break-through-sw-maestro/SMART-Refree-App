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
import PracticeScreen from "../screens/Practice";
import RecordScreen from "../screens/Record";
import TeamScreen from "../screens/Team";

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
        },
        Practice: {
            screen: PracticeScreen,
            navigationOptions: {
                title: "Practice",
                headerRight: <Avatar />,
                ...headerStyles
            }
        },
        Record: {
            screen: RecordScreen,
            navigationOptions: {
                title: "Record",
                headerRight: <Avatar />,
                ...headerStyles
            }
        },
        Team: {
            screen: TeamScreen,
            navigationOptions: {
                title: "Team",
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
