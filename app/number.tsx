<<<<<<< HEAD
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
=======
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
>>>>>>> 1a14678307d2ff72f94f332988bb174823267c46

export default function Number() {
    return (
    <SafeAreaProvider>
<<<<<<< HEAD
        <SafeAreaView>
        
=======
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 px-4 gap-4">
            <Link href={'/signin'}>
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
            </Link>
            <Text className="text-3xl font-medium ">Enter your mobile number</Text>
            <Text className="text-base text-[#7C7C7C]">Mobile Number</Text>
            <TextInput keyboardType="phone-pad" placeholder="BD +880"/> 
            <View className="absolute bottom-10 right-4 flex-row">
            <TouchableOpacity className="rounded-full h-[67px] w-[67px] bg-[#53B175] p-2 flex items-center justify-center">
                <Link href={'/verification'}>
                <AntDesign name="right" size={24} color="white" />
                </Link>
            </TouchableOpacity>
            </View>
            </View>
>>>>>>> 1a14678307d2ff72f94f332988bb174823267c46
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
