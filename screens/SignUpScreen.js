import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { colors, images, fonts, sizes } from "../constants/Data";
import {SignUp} from "../constants/Sever"


class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };

        // this.onSignUp = this.onSignUp.bind(this);
    }

    // onSignUp() {
    //     const { name, email, password } = this.state;
    //     firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((result) => {
    //             console.log(result);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <View>
                <Text style = {{
                    fontSize: sizes.ExtraLarge,
                }}>SignUp</Text>
                <View>
                    <TextInput 
                        onChangeText={(val) => this.state.name = val}
                        style={styles.textInput}
                        placeholder="Username"
                    />
                    <TextInput 
                        onChangeText={(val) => this.state.email = val}
                        style={styles.textInput}
                        placeholder="Enter your email"
                    />
                    <TextInput 
                        onChangeText={(val) => this.state.password = val}
                        style={styles.textInput}
                        placeholder="Enter a password"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.black,
                            height: 30,
                            width: 70,
                        }}
                        onPress={() => {
                            SignUp(this.state.email,this.state.password,this.state.name);
                        }}
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
                <View>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize:  sizes.Medium,
                            color: colors.black,
                        }}>
                            Already have an account, SignIn.
                        </Text>
                    </TouchableOpacity>
                </View>
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

    textInput: {
        borderRadius: sizes.ExtraSmall,
        borderWidth: 1,
        marginHorizontal: sizes.ExtraSmall,
        paddingHorizontal: sizes.Small,
        backgroundColor: colors.white,
        height: 40,
        borderColor: "transparent",
    },
});

export default SignUpScreen;