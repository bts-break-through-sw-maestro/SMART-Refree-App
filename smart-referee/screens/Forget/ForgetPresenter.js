import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const ForgetPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Forget</Text>;

ForgetPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default ForgetPresenter;
