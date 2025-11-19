import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1">
            <Link href={'/location'}>
            <AntDesign name="left" size={24} color="black" className="mt-4 mb-8"/>
            </Link>
            <View className="mt-4 items-center">
                <Image source={require('@/assets/images/carrot.png')} className="h-[55px] w-[47px] mt-4"/>
            </View>
            <View>
                <Text>Login</Text>
                <Text>Enter your emails and password</Text>
            </View>

            <View>
            <View>
                <Text>Email</Text>
                <TextInput keyboardType="email-address"  />
            </View>
            <View >
                <Text>Password</Text>
                <View>
                <TextInput />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                </View>
            </View>
            <Text>Forgot password?</Text>
            <TouchableOpacity className="bg-[#53B175] rounded-xl h-[67px] w-[353px] px-6 py-6">
                <Link href={'/(home)'}>
                <Text className="text-lg text-white text-center font-medium ">Get Started</Text>
                </Link>
            </TouchableOpacity>
            <View className="flex items-center justify-between">
                <Text>Don’t have an account?</Text>
                <TouchableOpacity>
                    <Link href={'/signup'}>
                    <Text className="text-[#53B175]">Signup</Text>
                    </Link>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
