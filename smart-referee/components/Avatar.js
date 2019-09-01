import React from "react";
import { Avatar } from "react-native-elements";
import styled from "styled-components";

const Container = styled.View`
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 44px;
`;

export default () => (
    <Container>
        <Avatar
            rounded
            size={30}
            icon={{ name: "user", type: "font-awesome" }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{}}
        />
    </Container>
);
