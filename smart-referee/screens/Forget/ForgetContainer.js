import React from "react";
import ForgetPresenter from "./ForgetPresenter";
import { Alert } from "react-native";

export default class extends React.Component {
    state = {
        loading: false,
        emailInputTerm: ""
    };

    handleEmailInputUpdate = text => {
        console.log(text);
        this.setState({ emailInputTerm: text });
    };

    onClickForgetButton = () => {
        Alert.alert("", "이메일로 비밀번호 초기화 링크 전송");
    };

    render() {
        const { loading, emailInputTerm } = this.state;

        return (
            <ForgetPresenter
                loading={loading}
                emailInputTerm={emailInputTerm}
                handleEmailInputUpdate={this.handleEmailInputUpdate}
                onClickForgetButton={this.onClickForgetButton}
            />
        );
    }
}
