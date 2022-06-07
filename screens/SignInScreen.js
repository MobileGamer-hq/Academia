import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors, images, fonts, sizes} from '../constants/Data';
import firebase from "firebase"

export class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: "",
            email: "",
            password: "",
        };

        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(){
        const {name, email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result)=>{
                console.log(result)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>SignIn</Text>
                <TextInput />
                <TextInput />
                <TextInput />
                <TouchableOpacity 
                    style = {{
                        backgroundColor: colors.black,
                        height: 30,
                        width: 70,
                    }}
    
                    onPress = {() => {}}
                >
                    <Text style = {{
                        fontSize: sizes.Medium,
                        color: colors.white,
                    }}>SignIn</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "flex-start",
    }
})
