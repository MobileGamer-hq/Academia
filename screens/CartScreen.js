import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { colors, images, fonts, products, cart } from '../constants/Data';


function CartScreen(props) {
    return (
        <View style={styles.container}>
            <Text>
                Cart Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
})

export default CartScreen;
