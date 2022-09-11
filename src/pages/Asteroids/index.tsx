import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Asteroids() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Search parameters</Text>
            <View style={styles.dates}>
                <TextInput style={styles.input} placeholder="Start date" value={startDate} onChangeText={setStartDate} />
                <TextInput style={styles.input} placeholder="End date" value={endDate} onChangeText={setEndDate} />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    },
    dates: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    input: {
        backgroundColor: '#DDD',
        padding: 15,
        width: '40%',
        color: '#000'
    },
    viewButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#105BD8',
        width: '30%',
        padding: 15,
        borderRadius: 9,
        marginTop: 30,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
    }
})