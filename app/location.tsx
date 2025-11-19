import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Location() {
    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1">
            <View className="px-4 gap-4">
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
            </View>
            <View className="items-center flex-1 gap-4">
            <Image source={require('@/assets/images/location.png')} className="mt-4 mb-8"/>
            <Text className="text-3xl font-bold">Select Your Location</Text>
            <View>
            <Text className="text-center text-base text-[#7C7C7C] font-medium">Switch on your location to stay in tune with</Text>
            <Text className="text-center text-base text-[#7C7C7C] font-medium">what’s happening in your area</Text>
            </View>
            </View>
            <View className="flex-1 justify-end pb-20 gap-4">
                <View className="px-4">
                <Text className="text-base text-[#7C7C7C] font-medium">Your Zone</Text>
                <TextInput placeholder="Banasree" placeholderTextColor={'black'} className="text-lg"/>
                <Text className="text-base text-[#7C7C7C] font-medium">Your Area</Text>
                <TextInput placeholder="Types of your area" className="text-lg"/>
                </View>
                <View className="items-center mt-4">
                <TouchableOpacity className="bg-[#53B175] rounded-xl h-[67px] w-[353px] px-6 py-6">
                    <Link href={'/login'}>
                        <Text className="text-lg text-white text-center font-medium ">Get Started</Text>
                    </Link>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
