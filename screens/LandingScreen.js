import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors, images, fonts, sizes } from '../constants/Data';

function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style = {{
                fontSize: sizes.ExtraLarge,
            }}>Academia</Text>
            <View style={{
                height: 300,
                width: 300,
                alignSelf: "center",
                justifyContent: "center",
            }}>
                <Image
                    style={{
                        flex: 1,
                        alignSelf: "center",
                    }}
                    resizeMode="contain"
                    source={images.logo}
                />
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: sizes.Large,
            }}>
                //SignIn Button
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={{
                        color: colors.white,
                        fontSize: sizes.Medium
                    }}>
                        SignIn
                    </Text>
                </TouchableOpacity>

                //SignUp Button
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={{
                        color: colors.white,
                        fontSize: sizes.Medium
                    }}>
                        SignIn
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
    },

    buttonStyle: {
        backgroundColor: colors.black,
        paddingHorizontal: sizes.ExtraLarge,
        paddingVertical: sizes.Small,
    },


})

export default LandingScreen;
