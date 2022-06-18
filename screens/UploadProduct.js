import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, sizes } from '../constants/Data'


const InfoInput = (props) => {
    return (
        <View>
            <TextInput
                style={{
                    height: 40,
                    backfaceVisibility: colors.white,
                }}
                onChangeText={props.method}
                placeholder={props.placeholder}
                value={props.valueType}
                keyboardType={props.keyboardType}
            />
        </View>
    );
}

const UploadProduct = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    //Title
                    <InfoInput/>
                </View>
                <View>
                    //Description
                    <InfoInput/>
                </View>
                <View>
                    //Price
                    <InfoInput/>
                </View>
                
            </View>
            <View style={{
                flexDirection: "row"
            }}>
                <TouchableOpacity>
                    <Text>Upload</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cancle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default UploadProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: sizes.ExtraLarge,
        backgroundColor: colors.defaultBG2,
    }
})