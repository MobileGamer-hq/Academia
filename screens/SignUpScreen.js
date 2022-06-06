import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors, images, fonts, sizes} from '../constants/Data';

function SignUpScreen({navigation}) {
    return (
        <View>
            <Text>SignUp</Text>
            <TextInput />
            <TextInput />
            <TextInput />
            <TouchableOpacity 
                style = {{
                    backgroundColor: colors.black,
                    height: 30,
                    width: 70,
                }}

                onPress = {() => {}}
            >
                <Text style = {{
                    fontSize: sizes.Medium,
                    color: colors.white,
                }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "flex-start",
    }
})

export default SignUpScreen;