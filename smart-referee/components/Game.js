import React from "react";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";
import Layout from "../constants/Layout";

const Container = styled.View`
    width: ${Layout.width - 60};
    height: 80px;
    border-radius: 5px;
    border: 1px solid ${TINT_COLOR};
    margin-bottom: 7px;
`;

export default () => <Container></Container>;
