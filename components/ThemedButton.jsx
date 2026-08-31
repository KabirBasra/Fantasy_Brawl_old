import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors"

function ThemedButton({ style, ...props}) {

    return (

        <Pressable 
        style={({pressed}) => [styles.button, pressed && styles.pressed, style]}
        {...props}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 5,
        marginVertical: 10
    },
    pressed: {
        opacity: 0.7
    },
})

export default ThemedButton