import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import { Colors } from "../../constants/Colors"

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('Register form submitted',email,password)
    }

  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Register a new account</ThemedText>
        <Spacer height={200}/>

        <ThemedTextInput
        style={{ width: '80%', marginBottom: 20}} 
        placeholder='email'
        keyboardType='email-address'
        onChangeText={setEmail}
        value={email}
        />
        <ThemedTextInput
        style={{ width: '80%', marginBottom: 20}} 
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
            <Text style={{color: '#f2f2f2'}}>Register</Text>
        </ThemedButton>


        <Link href='/login'>
            <ThemedText styles={{textAlign: 'center'}}>Login Instead</ThemedText>
        </Link>

    </ThemedView>
  )}


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