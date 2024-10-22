import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import moment from 'moment'
import {WeatherType} from '../utils/WeatherType'

export default function ListItem({item: {dt_txt, main, weather}}) {
  const {listItem, date, temp} = styles
  return (
    <View style={listItem}>
      <FeatherIcon
        name={WeatherType[weather[0]?.main]?.icon}
        size={20}
        color="#900"
      />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>MIN: {Math.round(main.temp_min)}°</Text>
      <Text style={temp}>MAX: {Math.round(main.temp_max)}°</Text>
      <Text>{weather[0]?.main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#e1d0f8',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    gap: 10
  },
  dateTextWrapper: {
    // flexDirection: 'row'
  },
  temp: {
    color: 'black',
    fontSize: 13
  },
  date: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 13
  }
})
