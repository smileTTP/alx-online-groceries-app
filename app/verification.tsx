import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Verification() {
    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 px-4 gap-4">
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
            <Text className="text-3xl font-medium ">Enter your 4-digit code</Text>
            <Text className="text-base text-[#7C7C7C]">Code</Text>
            <TextInput keyboardType="phone-pad" placeholder="----"/> 
            <View className="absolute bottom-10 inset-x-4 flex-row justify-between items-center">
            <TouchableOpacity>
                <Text className="text-[#53B175] text-lg font-medium mr-4">Resend Code</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full h-[67px] w-[67px] bg-[#53B175] p-2 flex items-center justify-center">
                <Link href={'/location'}>
                <AntDesign name="right" size={24} color="white" />
                </Link>
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
