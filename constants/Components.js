import React from 'react';
import { StyleSheet, Text, View, Button , Image, TouchableOpacity, TextInput} from 'react-native';
import {colors, fonts, user, sizes} from "./Data"


export function RoundButton(props) {
    return (
        <TouchableOpacity 
            style = {{
                borderRadius: sizes.ExtraLarge,
                backgroundColor: props.color,
                height: props.height,
                width: props.width,
            }} 
            onPress={props.method}
        >
            <Image source={props.image} />
        </TouchableOpacity>
    );
}

export const SearchBar = (props) => {
  return (
    <View>
        <TextInput 
            style = {{
                borderRadius: sizes.ExtraSmall,
                borderWidth: 1,
                marginHorizontal: sizes.ExtraSmall,
                paddingHorizontal: sizes.Small,
                backgroundColor: colors.white,
                height: 40,
                width: props.width,
                borderColor: "transparent",
            }} 
            placeholder = "snacks, assignments, stationaries..." 
            autoComplete='on'
        />
    </View>
  );
}

export const Header = ({navigation}) => {
    return(
        <View style = {styles.header}>
            <View>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header : {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    SearchBar: {
        borderRadius: sizes.ExtraSmall,
        borderWidth: 1,
        marginHorizontal: sizes.Small,
        paddingHorizontal: sizes.Small,
        backgroundColor: colors.white,
        height: 40,
        borderColor: "transparent",
    }
})



