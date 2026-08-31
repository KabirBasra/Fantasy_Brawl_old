import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from "../assets/Fantasy_Brawl_Logo.png"

// Themed Componenets
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={style.container}>
      <Image style={style.image} source={Logo}/>
      <ThemedText style={style.title} title={true}>Fantasy Brawl</ThemedText>
      <Text style={{marginTop: 5, marginBottom: 25}}>Brawl Esports Fanbase Hub</Text>

      <Link style={StyleSheet.link} href="/about">
        <ThemedText>About Page</ThemedText>
      </Link>
      
      <Spacer/>

      <Link style={StyleSheet.link} href="/login">
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Spacer/>

      <Link style={StyleSheet.link} href="/profile">
        <ThemedText>Profile Page</ThemedText>
      </Link>
      
    </ThemedView>
  )
}  

export default Home

const style = StyleSheet.create({
  image: {
    marginVertical: 20,
    width: 250,
    height: 250
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})