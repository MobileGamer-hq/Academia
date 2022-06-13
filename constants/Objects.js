import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RoundButton } from './Components';
import { colors, sizes } from "./Data"

export const ProfilePicture = (props) => {
    return (
        <View style={{
            backgroundColor: props.color,
            height: 100,
            width: 100,
            borderRadius: sizes.ExtraLarge,
            marginEnd: sizes.ExtraSmall,
            alignItems: "center",
            alignSelf: "center",
        }}>
            <Image
                source={props.image}
                style={{
                    height: 100,
                    width: 100,
                    flex: 1,
                    borderRadius: sizes.ExtraLarge,
                }}
                resizeMode="contain"
            />
        </View>
    );
}

export function ProductMax(props) {
    return (
        <TouchableOpacity
            style={styles.productMax}
            onPress={props.method}>
            <View styles={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{props.title}</Text>
                <Text style={{
                    fontSize: sizes.Small,
                }}>{props.price + " naira"}</Text>
            </View>
            <View style={{
                height: sizes.ExtraLarge,
                width: sizes.ExtraLarge,
                alignSelf: "center",
                justifyContent: "center",
            }}>
                <Image
                    style={{
                        flex: 1,
                        alignSelf: "center",
                    }}
                    resizeMode="contain"
                    source={props.image} />
            </View>
            <View style={{
                justifyContent: "flex-end",
                marginTop: sizes.ExtraSmall,
            }}>
                <Text style={{
                    fontSize: sizes.ExtraSmall,
                }}>{"Sold by " + props.seller}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ProductMin = (props) => {
    return (
        <TouchableOpacity
            style={styles.productMin}
            onPress={props.method}
        >
            <View style={{
                borderRadius: sizes.ExtraLarge,
                height: 70,
                width: 70,
                backgroundColor: colors.defaultBG2,
                margin: sizes.ExtraSmall,
                alignItems: "center",

            }}>
                <Image
                    style={{
                        flex: 1,
                    }}
                    resizeMode="contain"
                    source={props.image} />
            </View>
            <View style={{
                alignItems: "flex-start",
            }}>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{props.title}</Text>
                <Text style={{
                    fontSize: sizes.Small,
                }}>{props.price + " Naira"}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ProductCategory = (props) => {
    return (
        <TouchableOpacity
            style={styles.productCategory}
            onPress={props.method}>
            <View
                style={{
                    marginHorizontal: 10,
                    marginVertical: 0,
                }}
            >
                <Text style={{
                    color: colors.white,
                    fontSize: sizes.Small + 2,
                }}>{"#" + props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export function CartItem(props) {
    return (
        <View>
            <TouchableOpacity style={{
                flexDirection: "row",
                backgroundColor: colors.white,
                borderRadius: sizes.Small,
                height: 150,
                alignItems: 'center',
                justifyContent: "flex-start"
            }}>
                <View style={{
                    height: 100,
                    alignSelf: "center",
                    justifyContent: "center",
                }}>
                    <Image
                        style={{
                            flex: 1,
                            alignSelf: "center",
                        }}
                        resizeMode="contain"
                        source={props.image} />
                </View>

            </TouchableOpacity>
        </View>
    )
}

export function UserProfile(props) {
    return (
        <View style={styles.userProfile}>
            <ProfilePicture color={colors.defaultBG2} image={props.image} />
            <View style={{
                flexDirection: 'column',
            }}>
                <Text style={{
                    paddingHorizontal: 10,
                    fontSize: sizes.Medium,
                }}>{props.name}</Text>
                <Text style={{
                    paddingHorizontal: 10,
                    fontSize: sizes.Small,
                }}>{props.description}</Text>
                <Text style={{
                    paddingHorizontal: 10,
                    fontSize: sizes.Small,
                }}>{props.followers + " followers"}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: colors.black,
                alignItems: "center",
                justifyContent: "center",
                height: sizes.Medium + 10,
                padding: 5,
                borderRadius: sizes.ExtraSmall,
            }}>
                <Text style={{
                    fontSize: sizes.Small + 2.5,
                    color: colors.white,
                }}>
                    Follow
                </Text>
            </TouchableOpacity>
        </View>
    );
}


export const UserProfileMin = (props) => {
    const user = props.user
    return (
        <View style={styles.userProfileMin}>
            <TouchableOpacity
                onPress={props.method}
            >
                <ProfilePicture color={colors.white} image={props.image} />
            </TouchableOpacity>
            <View style={{
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{user.name}</Text>
                <Text>{user.followers + " followers"}</Text>
            </View>
            <View>
                <TouchableOpacity style={{
                    borderRadius: sizes.ExtraLarge,
                }}>

                </TouchableOpacity>
            </View>
        </View>
    )
}


export const SearchResult = (props) => {
    return (
        <View>
            <FlatList
                Vertical
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={props.data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.white,

                            }}
                        >
                            <View style={{
                                height: 100,
                            }}>
                                <Image
                                    style={{
                                        flex: 1,
                                    }}
                                    resizeMode="contain"
                                    source={item.image} />
                            </View>
                            <View>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    productMax: {
        flexDirection: "column",
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        borderRadius: sizes.Medium,
        margin: sizes.Small,
        width: 150,
    },

    productMin: {
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        borderRadius: sizes.Medium,
        margin: sizes.Small,
        width: 350,
        alignItems: 'center',
    },

    productCategory: {
        backgroundColor: colors.black,
        borderRadius: sizes.Medium,
        margin: sizes.ExtraSmall,
    },

    userProfile: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignContent: 'center',
        padding: sizes.Medium,
        //elevation: sizes.Medium,
        margin: sizes.ExtraSmall,
    },

    userProfileMin: {
        alignItems: "center",
        margin: sizes.Small,
    },

})
