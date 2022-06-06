import React from 'react';
import { StyleSheet, Text, View , FlatList, TouchableOpacity, Image} from 'react-native'
import { ImageButton } from '../constants/Components';
import { colors, sizes  } from '../constants/Data';
import { UserProfile, ProfilePicture } from '../constants/Objects';

function ProfileScreen({route, navigation}) {
    const user = route.params.item;;

    return (
        <View style = {styles.container}>
            <View style = {{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: "flex-start",
                padding: sizes.Medium,
                elevation: sizes.Medium,
                marginVertical: sizes.Medium,
            }}>
                <ProfilePicture color = {colors.defaultBG2} image = {user.profilePicture}/>
                <View style={{
                    flexDirection: 'column',
                }}>
                    <Text style = {{
                        paddingHorizontal: 10,
                        fontSize: sizes.Medium,
                    }}>{user.name}</Text>
                    <Text style = {{
                        paddingHorizontal: 10,
                        fontSize: sizes.Small,
                    }}>{user.description}</Text>
                <Text style = {{
                    paddingHorizontal: 10,
                    fontSize: sizes.Small,
                }}>{user.followers+ " followers"}</Text>
                </View>
                <View>
                    <ImageButton image = {require("../images/othersIcon.png")}/>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
});

export default ProfileScreen;