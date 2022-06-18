import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors, images, fonts, sizes } from '../constants/Data';
import { SignIn } from "../constants/Sever"


const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: sizes.ExtraLarge,
                alignSelf: "flex-start",
            }}>SignIn</Text>
            <View>
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
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.black,
                        height: 30,
                        width: 70,
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
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{
                        fontSize: sizes.Medium,
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