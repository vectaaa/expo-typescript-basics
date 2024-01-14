import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Pet from './components/Pet';
import { PetQualities } from './components/PetQualities';

export default function App() {

  const petName = {
       firstName : "Laravel",
       lastName: "John"
  }

  const qualities = [
    {
      qualOne: "crab",
      qualTwo: "shell",
      qualThree: "wet",
      age: 3,
    },
    {
      qualOne: "dumbledoore",
      qualTwo: "head",
      qualThree: "enormous",
      age: 3,
    }
  ]
  

  return (
    <View style={styles.container}>
      <Welcome  name='Jack Daniels' age={24} gender={true} />
      <Pet petName={petName} type="Komodo Dragon"/>
      <PetQualities qualities={qualities}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
});
