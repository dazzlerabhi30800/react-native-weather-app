import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'

export default function useGetWeather() {
    const [loading, setLoading] = useState(false)
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null);

    // function to fetch weather date
    const fetchWeatherData = async (position) => {
        try {
            let response = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`
            )
            let result = await response.json()
            setWeather(result)
        } catch (err) {
            Alert.alert('Error:', err.message)
            setError(err.message);
        } finally {
            setLoading(false)
        }
    }

    const getCurrentPosition = async () => {
        setLoading(true)
        Geolocation.getCurrentPosition(
            async (pos) => {
                await fetchWeatherData(pos)
            },
            (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
            { enableHighAccuracy: true }
        )
    }
    useEffect(() => {
        getCurrentPosition()
    }, [])

    return [loading, error, weather]
}