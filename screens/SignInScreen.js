import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors, images, fonts, sizes } from '../constants/Data';
import { SignIn } from "../constants/Sever"


const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontSize: sizes.ExtraLarge,
                    alignSelf: "flex-start",
                    marginVertical: sizes.Medium,
                }}>SignIn</Text>
                <TextInput
                    onChangeText={(val) => setEmail(val)}
                    style={styles.textInput}
                    placeholder="Enter your email"
                />
                <TextInput
                    onChangeText={(val) => setPassword(val)}
                    style={styles.textInput}
                    placeholder="Enter your password"
                />
            </View>
            <View style = {{
                alignItems: "center",
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.black,
                        height: 50,
                        width: 350,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: sizes.ExtraLarge,
                    }}

                    onPress={() => {
                        SignIn(email, password);
                    }}
                >
                    <Text style={{
                        fontSize: sizes.Medium,
                        color: colors.white,
                    }}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{
                        fontSize: sizes.Small+2.5,
                        color: colors.black,
                    }}>
                        Don't have an account, create one.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "center",
        paddingVertical: sizes.ExtraLarge,
        justifyContent: "space-between",
    },

    textInput: {
        borderRadius: sizes.ExtraSmall,
        borderWidth: 1,
        margin: sizes.ExtraSmall,
        paddingHorizontal: sizes.Small,
        backgroundColor: colors.white,
        height: 50,
        width: 350,
        borderColor: "black",
    },
})

export default SignInScreen;