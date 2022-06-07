import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {colors, sizes} from '../constants/Data';

function SignInScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>SignIn</Text>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TouchableOpacity
                style={{
                    backgroundColor: colors.black,
                    height: 30,
                    width: 70,
                }}

                onPress={() => {
                }}
            >
                <Text style={{
                    fontSize: sizes.Medium,
                    color: colors.white,
                }}>SignIn</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "flex-start",
    }
})

export default SignInScreen;
