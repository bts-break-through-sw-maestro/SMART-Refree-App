import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const PlayPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Play</Text>;

PlayPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default PlayPresenter;
