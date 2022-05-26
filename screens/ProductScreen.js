import React from 'react';
import { StyleSheet, Text, View, Button , Image, FlatList, TouchableOpacity} from 'react-native';
import { colors, images, fonts, products, users, sizes} from '../constants/Data';

function ProductScreen({route, navigation}) {
    const product = navigation.getParam("item");

    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: fonts.default,
                fontSize: sizes.ExtraLarge,
                marginBottom: sizes.Small,
            }}>{products[0].title}</Text>
            <View style = {{
                height: 500,
                width:350,
                backgroundColor: colors.grey,
                alignSelf: "center"
            }}>
                {/* <Image style ={{
                    resizeMode: "contain",
                }}source={}/> */}
            </View>
            <Text style={{
                fontSize: sizes.Small
            }}>{product.description}</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                padding: sizes.Medium,
                alignItems: "center"
            }}>
                <Text 
                    style={{
                        fontSize: sizes.Large,
                    }}>{product.price}
                </Text>

                <TouchableOpacity style={{
                    borderRadius: sizes.Small,
                    backgroundColor: colors.black,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 150,
                    padding: sizes.ExtraSmall,
                    alignItems: "center",
                    elevation: sizes.Small,
                }}>
                    <Text style={{
                        color: colors.white,
                    }}>Add to cart</Text>
                    <View style={{
                        height: sizes.Large,
                        width: sizes.Large,
                        backgroundColor: colors.white,
                        borderRadius: sizes.Large,
                    }}>
                        {/* <Image source={images.cart}/> */}
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