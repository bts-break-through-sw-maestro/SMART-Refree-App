import React from "react";
import ForgetPresenter from "./ForgetPresenter";
import { Alert } from "react-native";

export default class extends React.Component {
    state = {
        loading: false,
        phoneNumberInputTerm: ""
    };

    handlePhoneNumberInputUpdate = text => {
        console.log(text);
        this.setState({ phoneNumberInputTerm: text });
    };

    onClickForgetButton = () => {
        const { phoneNumberInputTerm: phoneNumber } = this.state;
        Alert.alert("", `${phoneNumber}번호에 관한 이메일 정보`);
    };

    render() {
        const { loading, phoneNumberInputTerm } = this.state;

        return (
            <ForgetPresenter
                loading={loading}
                phoneNumberInputTerm={phoneNumberInputTerm}
                handlePhoneNumberInputUpdate={this.handlePhoneNumberInputUpdate}
                onClickForgetButton={this.onClickForgetButton}
            />
        );
    }
}
