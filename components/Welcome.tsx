import { View, Text } from 'react-native'
import React from 'react'

type WelcomeProps = {
    name: string,
    age: number,
    gender: boolean
}

const Welcome = (props: WelcomeProps) => {
  return (
    <View>
      <Text>Hello {props.name}!</Text>
      <Text>You are {props.age} years old</Text>
      <Text> You are  a {props.gender ? "man" : "woman"}.</Text>
    </View>
  )
}

export default Welcome