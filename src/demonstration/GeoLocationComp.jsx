import React, {useState} from 'react'
import {Text, Alert, Button, View} from 'react-native'
import Geolocation from '@react-native-community/geolocation'

const GeoLocationComp = () => {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition(JSON.stringify(pos))
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true}
    )
  }
  const [position, setPosition] = useState('')
  console.log(position)
  return (
    <View>
      <Text>GeoLocation</Text>
      <Button title="Get Current Position" onPress={getCurrentPosition} />
    </View>
  )
}

export default GeoLocationComp
