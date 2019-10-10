import React from "react";
import ForgetPresenter from "./ForgetPresenter";
import { Alert } from "react-native";
import { accountApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: false,
        phoneNumberInputTerm: ""
    };

    handlePhoneNumberInputUpdate = text => {
        console.log(text);
        this.setState({ phoneNumberInputTerm: text });
    };

    onClickForgetButton = async () => {
        const { phoneNumberInputTerm: phoneNumber } = this.state;
        let result;
        try {
            ({ data: result } = await accountApi.findEmail(phoneNumber));
        } catch (error) {
            result = null;
        }

        {
            result
                ? Alert.alert("", result)
                : Alert.alert("", `${phoneNumber}로 가입된 정보가 없습니다.`);
        }
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
