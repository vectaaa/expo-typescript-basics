import { View, Text } from "react-native"

//This is for object array props passing
type PetQualProps = {
    qualities: {
    qualOne: string,
    qualTwo: string,
    qualThree: string,
    age: number,
  }[]
}

export const PetQualities = (props: PetQualProps) => {
    return(
        <View>
            {props.qualities.map((e, i) => {
                if(i === 0) return <Text>Your pet is  {e.qualOne} it has a {e.qualTwo} and it is naturally {e.qualThree} and it {e.age} years old. </Text>;

                return <Text>Your name is {e.qualOne} you have a big {e.qualTwo} and it is physically {e.qualThree} and it is {e.age} years younger.</Text>;
            })}
        </View>
    )

}
