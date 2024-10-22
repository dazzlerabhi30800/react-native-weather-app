import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry, Something went wrong</Text>
      <Feather name="frown" size={34} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
  }
})

export default ErrorItem
