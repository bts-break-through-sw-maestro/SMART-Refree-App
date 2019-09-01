import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const SignUpPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>SignUp</Text>;

SignUpPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default SignUpPresenter;
