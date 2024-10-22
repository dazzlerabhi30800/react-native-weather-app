import React, {useState} from 'react'
import {ActivityIndicator, Button, Text, View} from 'react-native'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <View style={{gap: 10, flex: 1, backgroundColor: 'tomato', padding: 10}}>
      <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>
        Count :- {count}
      </Text>
      <Button
        onPress={() => setCount((prev) => prev + 1)}
        title="Increase Count"
        color={'purple'}
      />
      <Button
        onPress={() => setCount((prev) => prev - 1)}
        title="Decrease Count"
      />
    </View>
  )
}
