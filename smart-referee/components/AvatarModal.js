import React from "react";
import { Avatar } from "react-native-elements";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import AvatarImage from "../assets/images/profile_empty_main.png";

const Container = styled.View`
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 1);
    margin-right: 10px;
`;

const AvatarModal = ({ navigation }) => (
    <Container>
        <Avatar
            rounded
            size="small"
            onPress={() => navigation.navigate("Modal")}
            activeOpacity={0.7}
            source={AvatarImage}
            imageProps={{ resizeMode: "cover" }}
        />
    </Container>
);

export default withNavigation(AvatarModal);
