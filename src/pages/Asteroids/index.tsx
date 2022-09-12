import { Animated, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { api } from "../../services/api";

type AsteroidType = {
    id: string
    name: string
    estimated_diameter: {
        kilometers :{
            estimated_diameter_max: number
        },
        meters: {
            estimated_diameter_max: number
        }
    }
    is_potentially_hazardous_asteroid: boolean
    orbital_data: {
        orbit_id: string
        first_observation_date: string
        last_observation_date: string
    }
}

export default function Asteroids() {
    const [asteroid, setAsteroid] = useState('')
    const [data, setData] = useState<AsteroidType | null>()
    const refInput = useRef(null)

    const search = async() => {
        if(asteroid === '') {
            setAsteroid('')
            Keyboard.dismiss()
            return
        }

        try {
            const response = await api.get(`neo/rest/v1/neo/${asteroid}?api_key=gYghXYZXWZtHHtUD9arAxBedEfcUjb8V3i6U5Qf7`)
            setData(response.data)
            setAsteroid('')
            Keyboard.dismiss()
        } catch (error) {
            alert('Error fetching information')
            Keyboard.dismiss()
            console.log(error)
        }
    }

    const newSearch = () => {
        setAsteroid('')
        setData(null)
        refInput.current.focus()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Asteroid identification</Text>
            <View style={styles.dates}>
                <TextInput
                    style={styles.input}
                    placeholder="ID asteroid"
                    keyboardType="numeric"
                    value={asteroid}
                    onChangeText={setAsteroid}
                    ref={refInput}    
                />
                
                <TouchableOpacity style={styles.button} onPress={search}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            { data && 
                <View style={styles.result}>
                    <Text style={styles.textResult}>Search result</Text>
                    <Text style={styles.textData}>Id: {data.id}</Text>
                    <Text style={styles.textData}>Name: {data.name}</Text>
                    <Text style={styles.textData}>Diameter (kilometers): {data.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} Km</Text>
                    <Text style={styles.textData}>Diameter (meters): {data.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} M</Text>
                    <Text style={styles.textData}>Potentially hazardous: {data.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</Text>
                    <Text style={styles.textData}>Orbit id: {data.orbital_data.orbit_id}</Text>
                    <Text style={styles.textData}>First observation: {data.orbital_data.first_observation_date}</Text>
                    <Text style={styles.textData}>Last observation: {data.orbital_data.last_observation_date}</Text>

                    <TouchableOpacity style={styles.btnNewSearch} onPress={newSearch}>
                        <Animated.Text style={styles.btnText}>New search</Animated.Text>
                    </TouchableOpacity>
                </View>    
            }
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
        color: '#105BD8',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dates: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    input: {
        backgroundColor: '#DDD',
        padding: 15,
        color: '#000',
        width: '50%',
        marginRight: '2%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#105BD8',
        padding: 15,
        borderRadius: 9,
        width: '20%'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
    },
    result: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textResult: {
        color: '#105BD8',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    textData: {
        fontSize: 17,
        padding: 4,
    },
    btnNewSearch: {
        width: '50%',
        borderWidth: 2,
        borderColor: '#FF0000',
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 9,
    },
    btnText: {
        color: '#FF0000',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '700',
    },
})