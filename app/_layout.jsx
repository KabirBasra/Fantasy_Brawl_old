import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { StackScreen } from 'react-native-screens'

import { Colors } from "../constants/Colors"
import { UserProvider } from '../Contexts/userContext'

const RootLaytout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserProvider>
      <Stack >
        <Stack.Screen name="index" options={{ title: "Fantasy Brawl", headerShown: false}}/>
        <Stack.Screen name="about" options={{ title: "About Page", headerShown: false}}/>
        <Stack.Screen name="(auth)" options={{ headerShown: false}}/>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false}}/>
      </Stack>
    </UserProvider>
  )
}

export default RootLaytout

const styles = StyleSheet.create({

})