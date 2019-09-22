import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const TeamPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Team Detail</Text>;

TeamPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default TeamPresenter;
