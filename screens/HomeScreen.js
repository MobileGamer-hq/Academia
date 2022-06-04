import React from 'react';
import { StyleSheet, Text, View, Button , Image, FlatList} from 'react-native';
import { colors, images, fonts, products, suggestedProducts, categories, users, sizes} from '../constants/Data';
import {ProductMin, ProductCategory, ProductMax, UserProfileMin} from '../constants/Objects';
import { RoundButton, SearchBar} from '../constants/Components';

function HomeScreen({ navigation }) {
    const currentUser = users[0];

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>
                <SearchBar />
                <RoundButton image = {currentUser.profilePicture} height = {45} width = {45} color = {colors.white} method = {()=>{
                    let item = currentUser;
                    navigation.navigate("Account", {item});}}/>
            </View>
            <View style = {{
                marginBottom: sizes.Medium,
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={categories}
                    renderItem = {({item}) => {
                        return(
                            <ProductCategory
                                image = {item.image}
                                method = {()=>navigation.navigate("Search", {search: item.name})}
                            />
                        )
                    }}
                />
            </View>
            <View style = {{
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                marginVertical: sizes.Medium,
            }}>
                <Text style = {{
                    fontSize: sizes.Medium,
                    alignSelf: "flex-start",
                    marginLeft: sizes.Small,
                }}>
                    Suggested
                </Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={suggestedProducts}
                    renderItem = {({item}) => {
                        return(
                            <ProductMax
                                product = {item}
                                title = {item.title}
                                price = {item.price}
                                image = {item.image}
                                seller = {item.seller}
                                method = {()=>navigation.navigate("Product", {item})}
                            />
                        )
                    }}
                />
            </View>
            <View style = {{
                marginVertical: sizes.Medium,
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={users}
                    renderItem = {({item}) => {
                        return(
                            <UserProfileMin
                                user = {item}
                                color = {item.colors}
                                image = {item.profilePicture}
                                method = {() =>navigation.navigate("Account", {item})}
                            />
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.defaultBG2,
        paddingTop: sizes.ExtraLarge,
    },
})

export default HomeScreen;
