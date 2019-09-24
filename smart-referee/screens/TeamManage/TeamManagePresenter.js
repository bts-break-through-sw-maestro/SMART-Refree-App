import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { Text } from "react-native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TeamManagePresenter = ({ loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <Text>Team Manage</Text>
        </Container>
    );

TeamManagePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default TeamManagePresenter;
