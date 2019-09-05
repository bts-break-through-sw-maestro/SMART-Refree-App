import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const PracticePresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Practice</Text>;

PracticePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default PracticePresenter;
