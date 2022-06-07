import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, images, fonts, sizes } from '../constants/Data';

function LandingScreen({ navigation }) {
    return (
        <View>
            <Text>Academia</Text>
            <View style={{
                height: 500,
                width: "100%",

            }}>
                <Image source={images.logo} />
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: sizes.Large,
            }}>
                //SignIn Button

                //SignUp Button
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,

    }
})

export default LandingScreen;