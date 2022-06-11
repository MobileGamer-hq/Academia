import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors, images, fonts, sizes} from '../constants/Data';
import {SignIn} from "../constants/Sever"


class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        // this.onSignIn = this.onSignIn.bind(this);
    }

    // onSignIn(){
    //     const {name, email, password} = this.state;
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then((result)=>{
    //             console.log(result)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {{
                    fontSize: sizes.ExtraLarge,
                }}>SignIn</Text>
                <View>
                    <TextInput 
                        onChangeText={(val) => this.state.email = val}
                        style={styles.textInput}
                        placeholder="Enter your email"
                    />
                    <TextInput 
                        onChangeText={(val) => this.state.password = val}
                        style={styles.textInput}
                        placeholder="Enter your password"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style = {{
                            backgroundColor: colors.black,
                            height: 30,
                            width: 70,
                        }}

                        onPress = {() => {
                            SignIn(this.state.email,this.state.password);
                        }}
                    >
                        <Text style = {{
                            fontSize: sizes.Medium,
                            color: colors.white,
                        }}>SignIn</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize:  sizes.Medium,
                            color: colors.black,
                        }}>
                            Don't have an account, create one.
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
})

export default SignInScreen;