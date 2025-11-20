import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
        <View className="px-4 gap-4">
        <Link href={'/login'}>
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
        </Link>
        <View className="mt-4 items-center">
            <Image source={require('@/assets/images/carrot.png')} className="h-[55px] w-[47px] mt-4"/>
        </View>
            <View className="mt-5 px-4">
                <Text className="text-3xl font-bold mb-1">Sign Up</Text>
                <Text className="text-[rgb(124,124,124)] font-medium text-base mb-1">Enter your credentials to continue</Text>
            </View>
            <View className="px-4">
            <View className="mt-4 grid grid-cols-2 gap-y-4">
            <View>
                <Text className="text-[#7C7C7C] font-medium">Username</Text>
                <TextInput keyboardType="default" className="border border-gray-200 rounded-lg" />
            </View>
            <View>
                <Text className="text-[#7C7C7C] font-medium">Email</Text>
                <TextInput keyboardType="email-address" className="border border-gray-200 rounded-lg" />
            </View>
            <View>
                <Text className="text-[#7C7C7C] font-medium">Password</Text>
                <View className="flex-row items-center justify-between border p-2 mt-1 border-gray-200 rounded-lg">
                <TextInput keyboardType="default" className="w-[330px] flex-1" />
                <FontAwesome name="eye-slash" size={24} color="#7C7C7C" />
                </View>
            </View>
            <Text className="text-sm font-bold">By continuing you agree to our Terms of Service and <Text className="text-[#53B175]">Privacy Policy.</Text></Text>
            </View>
            <View className="items-center mt-4">
            <TouchableOpacity className="bg-[#53B175] rounded-xl h-[67px] w-[353px] px-6 py-6">
                <Link href={'/(home)'}>
                <Text className="text-lg text-white text-center font-medium ">Sign Up</Text>
                </Link>
            </TouchableOpacity>
            </View>
            <View className="items-center">
            <Text className="flex justify-between mt-5">
                <Text className="font-bold text-md">Already have an account?</Text>
                <TouchableOpacity>
                    <Link href={'/login'}>
                    <Text className="text-[#53B175] font-bold text-sm ml-1">Login</Text>
                    </Link>
                </TouchableOpacity>
            </Text>
        </View>
            </View>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
