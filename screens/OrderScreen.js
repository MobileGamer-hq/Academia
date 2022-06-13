import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { sizes, colors, products, images, fonts } from '../constants/Data'

const OrderScreen = () => {
    return (
        <View style = {styles.container}>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingVertical: sizes.ExtraLarge,
    }
})


export default OrderScreen