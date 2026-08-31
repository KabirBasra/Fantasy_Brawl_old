import { StyleSheet, useColorScheme, StatusBar } from 'react-native'
import { Stack } from 'expo-router'
import { StackScreen } from 'react-native-screens'


export default function AuthLayout() {
    return (
        <>

            <Stack
                screenOptions={{ headerShown: false, animation: 'none'}}
            />
        </>
    )
}

const styles = StyleSheet.create({

})