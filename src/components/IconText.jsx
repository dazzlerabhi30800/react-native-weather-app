import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const IconText = ({iconName, iconColor, text, textStyles}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        // justifyContent: 'space-around',
        gap: 5
      }}>
      <Feather name={iconName} size={40} color={iconColor} />
      <Text style={[styles.popText, textStyles]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold'
  }
})

export default IconText
