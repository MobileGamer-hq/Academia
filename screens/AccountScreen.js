import React from 'react';
import { StyleSheet, Text, View, Button , Image, FlatList} from 'react-native';
import { colors, images, fonts, products, users} from '../constants/Data';
import { UserProfile, ProductMin} from '../constants/Objects';


function AccountScreen({route,  navigation }) {

    const user = users[0];

    return (
        <View style={styles.contaner}>
            <UserProfile 
            name = {user.name}
            description = {user.description}/>
            <View style={{
                flexDirection: "row",
            }}>
                <FlatList 
                    keyExtractor={(item)=>item.id}
                    data={products} 
                    renderItem = {({item}) => {
                        <ProductMin 
                        product = {item}
                        title = {item.title}
                        price = {item.price}
                        image = {item.image} 
                        method = {()=>navigation.navigate("Product", item)} />
                }}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        backgroundColor: colors.defaultBG2,
        paddingTop: 10,
        paddingHorizontal: 5,
    }
})

export default AccountScreen;
