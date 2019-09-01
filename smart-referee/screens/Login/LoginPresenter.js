import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const LoginPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Login</Text>;

LoginPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default LoginPresenter;
