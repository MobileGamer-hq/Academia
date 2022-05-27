import React from 'react';
import { StyleSheet, Text, View, Button , Image, FlatList} from 'react-native';
import { colors, images, fonts, products, suggestedProducts, categories, users} from '../constants/Data';
import { ProductMin, ProductCategory } from '../constants/Objects';
import { RoundButton } from '../constants/Components';

function HomeScreen({ navigation }) {
    const currentUser = users[0];

    return (
        <View style={styles.container}>
            <RoundButton color = {colors.blue} method= {()=>{
                navigation.navigate("Account", {currentUser});
            }} />
            <RoundButton color = {colors.red} method= {()=>{
                navigation.push("Cart");
            }} />
            <RoundButton color = {colors.yellow} method= {()=>{
                navigation.push("Settings");
            }} />
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={categories} 
                    renderItem = {({item}) => {
                        return(
                            <ProductCategory method = {()=>navigation.navigate("Search", {item})} />
                        )
                    }}
                />
            </View>
            <View style= {styles.suggested}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=>item.id}
                    data={suggestedProducts} 
                    renderItem = {({item}) => {
                        return(
                            <ProductMin 
                                product = {item}
                                title = {item.title}
                                price = {item.price}
                                //image = {item.image} 
                                method = {()=>navigation.navigate("Product", {item})} 
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
        paddingTop: 10,
    },
    suggested: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: 200,
    }
})

export default HomeScreen;