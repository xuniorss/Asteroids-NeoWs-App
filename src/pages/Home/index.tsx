import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackParamsList } from "../../routes/app.routes";

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    const asteroids = () => {
        navigation.navigate('Asteroids')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../img/logoNasa.png')} />
            <Text style={styles.text}>What do you want to look for ?</Text>

            <TouchableOpacity style={styles.button} onPress={asteroids}>
                <Text style={styles.buttonText}>Asteroids - NeoWs</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#105BD8',
        width: '50%',
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
    }
})