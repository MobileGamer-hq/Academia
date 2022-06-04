import React , {useState} from 'react';
import { StyleSheet, Text, View, Button , Image, TouchableOpacity} from 'react-native';
import {colors, fonts, images, sizes} from "./Data"

export const ProfilePicture = (props)=>{
    return(
        <View style={{
            backgroundColor: props.color,
            height: 100,
            width: 100,
            borderRadius: sizes.ExtraLarge,
            marginEnd: sizes.ExtraSmall,
            alignItems: "center",
            alignSelf: "center",
        }}>
            <Image
                source = {props.image}
                style = {{
                    height: 100,
                    width: 100,
                    flex: 1,
                    borderRadius: sizes.ExtraLarge,
                }}
                resizeMode = "contain"
            />
        </View>
    );
}

export function ProductMax(props) {
    return (
        <TouchableOpacity
        style={styles.productMax}
        onPress = {props.method}>
            <View styles = {{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{props.title}</Text>
                <Text style={{
                    fontSize: sizes.Small,
                }}>{props.price + " naira"}</Text>
            </View>
            <View style = {{
                height: sizes.ExtraLarge,
                width: sizes.ExtraLarge,
                alignSelf: "center",
                justifyContent: "center",
            }}>
                <Image
                    style = {{
                        flex: 1,
                        alignSelf: "center",
                    }}
                    resizeMode = "contain"
                    source = {props.image}/>
            </View>
            <View style = {{
                justifyContent: "flex-end",
            }}>
                <Text style = {{

                }}>{"Sold by " + props.seller}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ProductMin = (props)=>{
    return(
        <TouchableOpacity
            style = {styles.productMin}
            onPress = {props.method}
        >
            <View style = {{
                borderRadius: sizes.ExtraLarge,
                height: 70,
                width: 70,
                backgroundColor: colors.defaultBG2,
                margin: sizes.ExtraSmall,
                alignItems: "center",

            }}>
                <Image
                    style = {{
                    flex: 1,
                    }}
                   resizeMode = "contain"
                   source = {props.image}/>
            </View>
            <View style={{
                alignItems: "flex-start",
            }}>
                <Text style={{
                    fontSize: sizes.Medium,
                }}>{props.title}</Text>
                <Text style={{
                    fontSize: sizes.Small,
                }}>{props.price + " Naira"}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ProductCategory = (props) => {
    return(
        <TouchableOpacity
            style={styles.productCategory}
            onPress= {props.method}>
            <View style= {{
                height: 35,
                width: 35,
            }}>
                <Image
                    style = {{
                        flex: 1,
                    }}
                    resizeMode = "contain"
                    source = {props.image}
                />
            </View>
        </TouchableOpacity>
    );
}


export function UserProfile(props) {
    return (
       <View style = {{
           backgroundColor: colors.white,
           flexDirection: 'row',
           alignContent: 'center',
           justifyContent: "flex-start",
           padding: sizes.Medium,
           elevation: sizes.Medium,
           margin: sizes.ExtraSmall,
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
       </View>
    );
}

export const UserProfileMin = (props) => {
    const user = props.user
  return(
      <View style = {{
          alignItems: "center",
          margin: sizes.Small,
      }}>
          <TouchableOpacity
              onPress= {props.method}
          >
              <ProfilePicture color={colors.white} image ={props.image} />
          </TouchableOpacity>
          <View style = {{
              alignItems: "center",
          }}>
              <Text style = {{
                  fontSize: sizes.Medium,
              }}>{user.name}</Text>
              <Text>{user.followers+ " followers"}</Text>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    productMax : {
        flexDirection: "column",
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        borderRadius: sizes.Medium,
        // elevation: sizes.Small,
        margin: sizes.Small,
        height: 200,
        width: 150,
    },

    productMin : {
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: sizes.ExtraSmall,
        borderRadius: sizes.Medium,
        // elevation: sizes.ExtraSmall,
        margin: sizes.Small,
        width: 350,
        alignItems: 'center',
    },

    productCategory : {
        backgroundColor: colors.white,
        borderRadius: sizes.Medium,
        height: 50,
        width: 50,
        margin: sizes.Small,
        // elevation: sizes.ExtraSmall,
        paddingTop: 8,
    }
})
