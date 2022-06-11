import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, images } from '../constants/Data';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{
        height: 300,
        width: 300,
        alignSelf: "center",
        justifyContent: "center",
      }}>
        <Image
          style={{
            flex: 1,
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={images.logo}
        />
      </View>
    </View>
  );
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
});