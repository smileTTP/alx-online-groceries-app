import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-4 gap-4">
            <Link href={'/location'}>
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
            </Link>
            <View className="mt-4 items-center">
                <Image source={require('@/assets/images/carrot.png')} className="h-[55px] w-[47px] mt-4"/>
            </View>
            <View className="mt-5 px-4">
                <Text className="text-3xl font-bold mb-1">Login</Text>
                <Text className="text-[rgb(124,124,124)] font-medium text-base mb-1">Enter your emails and password</Text>
            </View>
            <View className="px-4">
            <View className="mt-4 grid grid-cols-2 gap-y-4">
            <View>
                <Text className="text-[#7C7C7C] font-medium">Email</Text>
                <TextInput keyboardType="email-address"  />
            </View>
            <View>
                <Text className="text-[#7C7C7C] font-medium">Password</Text>
                <View className="flex-row items-center justify-between border p-2 mt-1">
                <TextInput keyboardType="default" className="w-[330px] flex-1" />
                <FontAwesome name="eye-slash" size={24} color="#7C7C7C" />
                </View>
            </View>
            <Text className="text-sm font-bold">Forgot password?</Text>
            </View>
            <View className="items-center mt-4">
            <TouchableOpacity className="bg-[#53B175] rounded-xl h-[67px] w-[353px] px-6 py-6">
                <Link href={'/(home)'}>
                <Text className="text-lg text-white text-center font-medium ">Login</Text>
                </Link>
            </TouchableOpacity>
            </View>
            <View className="items-center">
            <Text className="flex justify-between mt-5">
                <Text className="font-bold text-md">Don’t have an account?</Text>
                <TouchableOpacity>
                    <Link href={'/signup'}>
                    <Text className="text-[#53B175] font-bold text-sm ml-1">Signup</Text>
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
