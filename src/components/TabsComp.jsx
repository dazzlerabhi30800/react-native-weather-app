import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

const Tabs = createBottomTabNavigator()
const TabsComp = ({weatherData}) => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 25,
          color: 'tomato'
        }
      }}>
      <Tabs.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}>
        {() => <CurrentWeather weatherData={weatherData.list[0]} />}
      </Tabs.Screen>
      <Tabs.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}>
        {() => <UpcomingWeather weatherData={weatherData.list} />}
      </Tabs.Screen>

      <Tabs.Screen
        name={'City'}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}>
        {() => <City weatherData={weatherData.city} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  )
}

export default TabsComp
