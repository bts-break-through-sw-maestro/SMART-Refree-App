import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MenuPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Menu</Text>;

MenuPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MenuPresenter;
