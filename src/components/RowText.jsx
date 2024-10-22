import React from 'react'
import {Text, View} from 'react-native'

const RowText = (props) => {
  const {
    containerStyle,
    messageOneStyle,
    messageTwoStyle,
    messageOne,
    messageTwo
  } = props
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
