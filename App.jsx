import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabsComp from './src/components/TabsComp'
import {ActivityIndicator, View, Alert} from 'react-native'
import useGetWeather from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

export default function App() {
  const [loading, error, weather] = useGetWeather()

  // console.log(position?.coords.latitude)

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <TabsComp weatherData={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'tomato',
        paddingTop: loading ? 40 : 0,
        justifyContent: 'center'
      }}>
      {!error ? <ActivityIndicator size="large" color="blue" /> : <ErrorItem />}
    </View>
  )
}
