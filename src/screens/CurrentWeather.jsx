import React from 'react'
import {SafeAreaView, Text, View, StyleSheet} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import RowText from '../components/RowText'
import {WeatherType} from '../utils/WeatherType'

const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    highLowWrapper,
    feels,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  const {
    main: {temp, temp_min, temp_max, feels_like},
    weather
  } = weatherData
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        wrapper,
        {backgroundColor: WeatherType[weatherCondition]?.backgroundColor}
      ]}>
      <View style={container}>
        <Text style={tempStyles}>{temp}°C</Text>
        <Text style={feels}>Feels like {feels_like}°C</Text>
        <FeatherIcon
          name={WeatherType[weatherCondition]?.icon}
          size={40}
          color="#900"
        />
        <RowText
          containerStyle={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
          messageOne={`High:${temp_max}°C`}
          messageTwo={`Low:${temp_min}°C`}
        />
      </View>
      <RowText
        containerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
        messageOne={WeatherType['Thunderstorm']?.description}
        messageTwo={WeatherType['Thunderstorm']?.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    padding: 10,
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highLowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  textStyle: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800'
  },
  tempStyles: {
    color: 'black',
    fontSize: 40
  },
  feels: {
    color: 'black',
    fontSize: 25
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 36,
    color: 'black'
  },
  message: {
    fontSize: 30,
    color: 'black'
  }
})

export default CurrentWeather
