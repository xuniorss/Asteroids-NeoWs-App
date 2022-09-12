import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Asteroids from '../pages/Asteroids'
import Techtransfer from '../pages/Techtransfer'

export type StackParamsList = {
    Home: undefined
    Asteroids: undefined
    Techtransfer: undefined
}

const Stack = createNativeStackNavigator<StackParamsList>()

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Asteroids' component={Asteroids} />
            <Stack.Screen name='Techtransfer' component={Techtransfer} />
        </Stack.Navigator>
    )
}