import { StyleSheet } from 'react-native'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from "../../constants/Colors"

const News = () => {
    return (
        <ThemedView style={styles.container} safe={true}>
            <ThemedText title={true} style={styles.heading}>
                Brawl News
            </ThemedText>
            <Spacer/>
        </ThemedView>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
})