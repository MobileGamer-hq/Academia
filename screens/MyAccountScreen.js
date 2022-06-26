import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, sizes } from '../constants/Data'
import { ProfilePicture, ProductMin } from "../constants/Components"
import { logOut } from '../constants/Sever'

const MyAccountScreen = ({ route, navigation }) => {
  const user = route.params.item;

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: colors.white,
        padding: 10,
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 350,
        }}>
          <View style={{
            alignItems: "center",
          }}>
            <ProfilePicture
              image={user.profilePicture}
              color={colors.white}
            />
            <Text style={{
              fontSize: sizes.Small,
            }}>{user.name}</Text>
            <Text>{user.descrition}</Text>
          </View>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <View>
              <TouchableOpacity style={{
                alignItems: "center",
                margin: 5,
              }}>
                <Text style={{
                  fontSize: sizes.Small + 5
                }}>{user.sellerInfo.amountSelling}</Text>
                <Text style={{
                  fontSize: sizes.ExtraSmall + 5
                }}>Products</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{
                alignItems: "center",
                margin: 5,
              }}>
                <Text style={{
                  fontSize: sizes.Small + 5
                }}>{user.followers}</Text>
                <Text style={{
                  fontSize: sizes.ExtraSmall + 5
                }}>Followers</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{
                alignItems: "center",
                margin: 5,
              }}>
                <Text style={{
                  fontSize: sizes.Small + 5
                }}>{user.following.length}</Text>
                <Text style={{
                  fontSize: sizes.ExtraSmall + 5
                }}>Following</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{
          alignSelf: "flex-end"
        }}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          alignSelf: "flex-end"
        }} onPress = {()=>{
          logOut()
          navigation.navigate("Landing")
          
          }}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{
          fontSize: sizes.Medium,
          alignSelf: "flex-start",
          marginLeft: sizes.Small,
        }}>
          Products
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={user.sellerInfo.productList}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity style={{
                    height: 300,
                    width: 200,
                    backgroundColor: colors.white,
                    padding: sizes.ExtraSmall,
                    margin: 10,
                    justifyContent: "space-between",
                    borderRadius: sizes.Small,
                  }}>
                    <View style={{
                      alignItems: "flex-start",
                    }}>
                      <Text style={{
                        fontSize: sizes.Large,
                      }}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{
                      height: 125,
                      width: 125,
                      alignSelf: "center",
                      justifyContent: "center",
                    }}>
                      <Image
                        style={{
                          flex: 1,
                          alignSelf: "center",
                        }}
                        resizeMode="contain"
                        source={item.image} />
                    </View>
                    <View style={{
                      alignItems: "flex-start",
                    }}>
                      <TouchableOpacity
                      //onPress={navigation.navigate("Product", { item })}
                      >
                        <Text style={{
                          fontSize: sizes.Small
                        }}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>

      </View>
      <View>
        <TouchableOpacity style={{
          backgroundColor: colors.black,
        }}>
          <Text style={{
            fontSize: sizes.Medium,
            color: colors.white,
          }}>
            add product
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultBG2,
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
    paddingTop: sizes.ExtraLarge,
  },
});