import React from 'react';
import { StyleSheet, Text, View, Button , Image, FlatList} from 'react-native';
import { colors, images, fonts, products, suggestedProducts, user} from '../constants/Data';
import { ProductMin } from '../constants/Objects';
import { RoundButton } from '../constants/Components';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <RoundButton color = {colors.blue} method= {()=>{
                navigation.push("Account");
            }} />
            <Button 
                color={colors.pink}
                title = "Account" onPress = {()=>{
                navigation.push("Account");
            }}/>
            <Button 
                color={colors.yellow}
                title = "Settings" 
                onPress = {()=>{
                    navigation.push("Settings");
            }}/>
            <Button 
                color={colors.red}
                title = "Product" 
                onPress = {()=>{
                    navigation.push("Product");
            }}/>
            <Button 
                color={colors.blue}
                title = "Orders" 
                onPress = {()=>{
                    navigation.push("Orders");
            }}/>

            <View style={{
                flexDirection: 'row',
                backgroundColor: colors.white,
                
                
            }}>
                <FlatList 
                    keyExtractor={(item)=>item.id}
                    data={suggestedProducts} 
                    renderItem = {({item}) => {
                        <ProductMin 
                        product = {item}
                        title = {item.title}
                        price = {item.price}
                        //image = {item.image} 
                        method = {()=>navigation.navigate("Product", {item})} />
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.defaultBG2,
        paddingTop: 10,
        justifyContent: "space-evenly",
    }
})

export default HomeScreen;