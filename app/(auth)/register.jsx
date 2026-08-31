import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from "../../constants/Colors"

const Register = () => {

        const handleSubmit = () => {
        console.log('Register form submitted')
    }
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Register a new account</ThemedText>
        <Spacer height={200}/>

        <ThemedButton onPress={handleSubmit}>
            <Text style={{color: '#f2f2f2'}}>Register</Text>
        </ThemedButton>

        <Link href='/login'>
            <ThemedText styles={{textAlign: 'center'}}>Login Instead</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    }
})