import React from 'react';
import { StyleSheet, Text, View, Button , Image, FlatList, TouchableOpacity} from 'react-native';
import { colors, images, fonts, products, users, sizes} from '../constants/Data';

function ProductScreen({route, navigation}) {
    const product = route.params;

    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: fonts.default,
                fontSize: sizes.ExtraLarge,
                marginBottom: sizes.Small,
            }}>{products[0].title}</Text>
            <View style = {{
                height: 300,
                width: 300,
            }}>
                <Image source={product.image}/>
            </View>
            <Text style={{
                
            }}>{product.description}</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                padding: sizes.Medium
            }}>
                <Text>{product.price}</Text>
                <TouchableOpacity style={{
                    borderRadius: sizes.Small,
                    backgroundColor: colors.black,
                }}>
                    <Text style={{
                        color: colors.white,
                    }}>Add to cart</Text>
                    <View style={{
                        height: sizes.Large,
                        width: sizes.Large,
                        backgroundColor: colors.grey,
                    }}>
                        <Image source={images.cart}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backfaceVisibility: colors.white,
        padding: sizes.ExtraSmall,
    },
})  

export default ProductScreen;