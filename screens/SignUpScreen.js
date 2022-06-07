import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import { colors, images, fonts, sizes } from "../constants/Data";
import {
    getAuth,
    onAuthStateChanged,
    FacebookAuthProvider,
    signInWithCredential,
  } from 'firebase/auth';

export class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };

        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        const { name, email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                <Text>SignUp</Text>
                <TextInput />
                <TextInput />
                <TextInput />
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.black,
                        height: 30,
                        width: 70,
                    }}
                    onPress={() => { }}
                >
                    <Text
                        style={{
                            fontSize: sizes.Medium,
                            color: colors.white,
                        }}
                    >
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "flex-start",
    },
});
