import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../pages/Search'

export type StackParamsList = {
    Search: undefined
}

const Stack = createNativeStackNavigator<StackParamsList>()

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}