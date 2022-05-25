import React from 'react';
import { StyleSheet, Text, View, Button , Image, TouchableOpacity} from 'react-native';
import {colors, fonts, user, sizes} from "./Data"


export function RoundButton(props) {
    return (
        <TouchableOpacity 
        style = {{
            borderRadius: sizes.ExtraLarge,
            backgroundColor: props.color,
            height: 50,
            width: 50,
            margin: sizes.ExtraSmall,
        }} 
        onPress={props.method}>
            <Image source={props.image} />
        </TouchableOpacity>
    );
}