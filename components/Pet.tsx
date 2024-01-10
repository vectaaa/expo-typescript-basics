import { View, Text } from 'react-native';
import React from 'react';

type Petprops = {
     petName: {
        firstName: string,
        lastName: string
     }
     type: string,

}

const Pet = (props: Petprops ) => {
    //Here we decontruct the object
    const {firstName, lastName} = props.petName;

  return (
    <View>
      <Text>You own a pet name {firstName} {lastName}.</Text>
      <Text>The pet is a {props.type}.</Text>
    </View>
  )
}

export default Pet;