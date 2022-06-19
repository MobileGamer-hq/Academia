import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { colors, images, fonts, sizes } from "../constants/Data";
import { SignUp } from "../constants/Sever"


const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontSize: sizes.ExtraLarge,
                    alignSelf: "flex-start",
                    marginVertical: sizes.Medium,
                }}>SignUp</Text>
                <TextInput
                    onChangeText={(val) => setName(val)}
                    style={styles.textInput}
                    placeholder="Username"
                />
                <TextInput
                    onChangeText={(val) => setEmail(val)}
                    style={styles.textInput}
                    placeholder="Enter your email"
                />
                <TextInput
                    onChangeText={(val) => setPassword(val)}
                    style={styles.textInput}
                    placeholder="Enter a password"
                />
            </View>
            <View style={{
                alignItems: "center",
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.defaultBG4,
                        height: 50,
                        width: 350,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: sizes.ExtraLarge,
                    }}
                    onPress={() => {
                        let item = SignUp(email, password, name);
                        navigation.navigate("Loading", { item })
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
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={{
                        fontSize: sizes.Small + 2.5,
                        color: colors.defaultBG4,
                    }}>
                        Already have an account, SignIn.
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
        borderColor: colors.defaultBG4,
    },
});

export default SignUpScreen;