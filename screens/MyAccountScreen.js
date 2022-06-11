import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, sizes } from '../constants/Data'
import { ProfilePicture } from "../constants/Objects"

const MyAccountScreen = ({ route, navigation }) => {
  const user = route.params.item;

  return (
    <View style={styles.container}>
      <View>
        <View style={{
          backgroundColor: colors.white,
          flexDirection: "row",
          justifyContent: "space-around"
        }}>
          <ProfilePicture 
            image = {user.profilePicture}
            color = {colors.white}
          />
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <View>
              <TouchableOpacity>
                <Text style={{
                  fontSize: sizes.Small
                }}>{user.productList.length}</Text>
                <Text style={{
                  fontSize: sizes.ExtraSmall
                }}>Products</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{
                  fontSize: sizes.Small
                }}>{user.followers}</Text>
                <Text style={{
                  fontSize: sizes.ExtraSmall
                }}>Followers</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{
                  fontSize: sizes.Small
                }}>{user.following.length}</Text>
                <Text style={{
                  fontSize: sizes.ExtraSmall
                }}>Following</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{
          alignItems: "flex-start",
        }}>
          <Text>{user.name}</Text>
          <Text>{user.descrition}</Text>
        </View>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
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
                    width: 150,
                    backgroundColor: colors.white,
                    padding: sizes.ExtraSmall,
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
                        onPress={navigation.navigate("Product", { item })}
                      >
                        <Text style={{
                          fontSize: sizes.Small
                        }}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                  <ProductMin
                    product={item}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    method={() => navigation.navigate("Product", { item })}
                  />
                </View>
              )
            }}
          />
        </View>

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
    paddingHorizontal: sizes.ExtraSmall,
  },
});