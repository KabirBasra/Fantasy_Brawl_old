import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from "../../constants/Colors"

const Login = () => {

    const handleSubmit = () => {
        console.log('Login form submitted')
    }

  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Login to your account</ThemedText>
        <Spacer height={200}/>

        <ThemedButton onPress={handleSubmit}>
            <Text style={{color: '#f2f2f2'}}>Login</Text>
        </ThemedButton>

        <Link href='/register'>
            <ThemedText styles={{textAlign: 'center'}}>Register Instead</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Login

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
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5
    },
    pressed: {
        opacity: 0.7
    }
})