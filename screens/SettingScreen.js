import React from 'react';
import {Text, View} from 'react-native';
import {sizes} from '../constants/Data'


function SettingScreen({navigation}) {
    return ( 
        <View>
            <Text>
                Setting Screen
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default SettingScreen;
