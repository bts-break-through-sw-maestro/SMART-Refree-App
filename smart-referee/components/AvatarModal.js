import React from "react";
import { Avatar } from "react-native-elements";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

const Container = styled.View`
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 44px;
`;

const AvatarModal = ({ navigation }) => (
    <Container>
        <Avatar
            rounded
            size={30}
            icon={{ name: "user", type: "font-awesome" }}
            onPress={() => navigation.navigate("Modal")}
            activeOpacity={0.7}
            containerStyle={{}}
        />
    </Container>
);

export default withNavigation(AvatarModal);
