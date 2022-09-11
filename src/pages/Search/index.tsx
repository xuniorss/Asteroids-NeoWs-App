import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackParamsList } from "../../routes/app.routes";

export default function Search() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    return (
        <SafeAreaView style={styles.container}>
            <Text>AAA</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})