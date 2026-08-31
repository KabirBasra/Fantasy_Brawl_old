import { StyleSheet } from 'react-native'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from "../../constants/Colors"

const Fantasy = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}>
                Fantasy Draft
            </ThemedText>
            <Spacer/>
        </ThemedView>
    )
}

export default Fantasy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
})