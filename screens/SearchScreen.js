import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SearchScreen({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        
    }
})