import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const HomePresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Home</Text>;

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;
