import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { sizes, InitialState, settings } from '../constants/Data'


function SettingScreen({ navigation }) {
    const [settings, setsettings] = useState(InitialState.setting)

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
