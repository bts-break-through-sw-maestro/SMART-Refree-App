import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Test = styled.Text``;

const TeamSearchPresenter = ({ loading, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <Test>Team Search</Test>
        </Container>
    );

TeamSearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TeamSearchPresenter;
