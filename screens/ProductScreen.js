import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { colors, images, sizes } from '../constants/Data';

function ProductScreen({ route, navigation }) {
    const product = route.params.item;

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator ={false}>
            <Text style={{
                fontSize: sizes.ExtraLarge,
                marginBottom: sizes.Small,
            }}>{product.title}</Text>
            <View style={{
                height: 500,
                width: "100%",
                alignSelf: "center",
                alignItems: "center",
            }}>
                <Image
                    style={{
                        flex: 1,
                    }}
                    resizeMode="contain"
                    source={product.image} />
            </View>
            <Text style={{
                fontSize: sizes.Small,
                color: colors.grey,
            }}>{product.description}</Text>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    //keyExtractor={(item)=>item.id}
                    data={product.tags}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <View style={{
                                    margin: 10,
                                    padding: 5,
                                    backgroundColor: colors.black,
                                    borderRadius: sizes.ExtraLarge,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <Text style={{
                                        fontSize: sizes.Small,
                                        color: colors.white,
                                    }}>
                                        {"#" + item}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                padding: sizes.Medium,
                alignItems: "center"
            }}>
                <Text
                    style={{
                        fontSize: sizes.Large,
                    }}>{product.price + " Naira"}
                </Text>

                <TouchableOpacity
                    style={{
                        borderRadius: sizes.Small,
                        backgroundColor: colors.black,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: sizes.ExtraSmall,
                        alignItems: "center",
                        elevation: sizes.Small,
                    }}

                //onPress={navigation.navigate("Cart", {product})}
                >
                    <Text style={{
                        color: colors.white,
                    }}>Add to cart</Text>
                    <View style={{
                        height: sizes.Large,
                        width: sizes.Large,
                        borderRadius: sizes.Large,
                        alignItems: "center",
                        marginHorizontal: sizes.ExtraSmall,
                    }}>
                        <Image
                            style={{
                                flex: 1,
                            }}
                            resizeMode="contain"
                            source={images.cartWhite}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        paddingTop: sizes.ExtraLarge,
    },
})

export default ProductScreen;
