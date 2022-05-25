import React , {useState} from 'react';
import { StyleSheet, Text, View, Button , Image, TouchableOpacity} from 'react-native';
import {colors, fonts, sizes, user} from "./Data"

export const ProfilePicture = (props)=>{
    return(
        <TouchableOpacity style={{
            backgroundColor: colors.mediumslateblue,
            height: 100,
            width: 100,
            borderStartColor: colors.black,
            borderRadius: sizes.ExtraLarge,
            marginEnd: sizes.ExtraSmall,
        }}
        
        onPress={props.method}>
            <Image source = {props.image}/>
        </TouchableOpacity>
    );
}

export function ProductMax(props) {
    return (
        <TouchableOpacity 
        style={styles.productMax}
        onPress = {()=>{
            console.log(props.title + " was clicked");
        }}>
            <View style = {{
                borderRadius: sizes.ExtraLarge,
                height: 70,
                width: 70,
                backgroundColor: colors.grey,
                marginBottom: sizes.ExtraSmall,
            }}>
                <Image source = {props.image}/>
            </View>
            <View>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{props.title}</Text>
                <Text style={{
                    fontSize: sizes.Small,
                }}>{props.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ProductMin = (props)=>{
    const [product, setProduct] = useState(props.product)
    return(
        <TouchableOpacity 
        style = {styles.productMin}
        onPress = {()=> props.method}>
            <View style = {{
                borderRadius: sizes.ExtraLarge,
                height: 70,
                width: 70,
                backgroundColor: colors.grey,
                marginBottom: sizes.ExtraSmall,
            }}>
                <Image source = {props.image}/>
            </View>
            <View>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{props.title}</Text>
                <Text style={{
                    fontSize: sizes.Small,
                }}>{props.price}</Text>
            </View>
        </TouchableOpacity>
    );
}


export function UserProfile(props) {
    return (
       <View style = {{
           height: 150,
           backgroundColor: colors.white,
           flexDirection: 'row',
           alignContent: 'center',
           justifyContent: "flex-start",
           padding: sizes.Medium,
           elevation: sizes.Medium,
        //    borderColor: colors.grey,
        //    borderWidth: 2.5,
        //    borderRadius: fonts.sizeSmall
       }}>
           <ProfilePicture image = {props.image}/>
           <View style={{
               flexDirection: 'column',
           }}>
            <Text style = {{
                paddingHorizontal: 10,
                fontSize: sizes.Medium
            }}>{props.name}</Text>
            <Text style = {{
                paddingHorizontal: 10,
                fontSize: sizes.Small,
            }}>{props.description}</Text>
           </View>
       </View> 
    );
}

const styles = StyleSheet.create({
    productMax : {
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        borderRadius: sizes.Small,
        elevation: sizes.Medium,
    },

    productMin : {
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        borderRadius: sizes.Small,
        elevation: sizes.Medium,
    },
})