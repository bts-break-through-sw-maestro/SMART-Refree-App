import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const ModalPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Modal</Text>;

ModalPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default ModalPresenter;
