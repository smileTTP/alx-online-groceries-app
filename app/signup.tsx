import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1">
        <Link href={'/login'}>
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
        </Link>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
