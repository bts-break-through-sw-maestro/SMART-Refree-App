import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStack } from "./config";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import ForgetScreen from "../screens/Forget";
import HomeScreen from "../screens/Home";
import MenuScreen from "../screens/Menu";

const MainNavigation = createStackNavigator(
    {
        Login: {
            screen: createStack(LoginScreen, "Login")
        },
        SignUp: {
            screen: createStack(SignUpScreen, "SignUp")
        },
        Forget: {
            screen: createStack(ForgetScreen, "Forget")
        },
        Home: {
            screen: createStack(HomeScreen, "Home")
        },
        Menu: {
            screen: createStack(MenuScreen, "Menu")
        }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);

export default createAppContainer(MainNavigation);
