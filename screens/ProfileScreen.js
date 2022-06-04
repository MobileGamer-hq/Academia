import React from 'react';
import { colors, sizes  } from '../constants/Data';
import { UserProfile } from '../constants/Objects';

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
                <ProfilePicture color = {colors.defaultBG2} image = {props.image}/>
                <View style={{
                    flexDirection: 'column',
                }}>
                    <Text style = {{
                        paddingHorizontal: 10,
                        fontSize: sizes.Medium,
                    }}>{props.name}</Text>
                    <Text style = {{
                        paddingHorizontal: 10,
                        fontSize: sizes.Small,
                    }}>{props.description}</Text>
                <Text style = {{
                    paddingHorizontal: 10,
                    fontSize: sizes.Small,
                }}>{props.followers+ " followers"}</Text>
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