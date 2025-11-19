import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";

export default function Signin() {

    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
        <Image source={require('@/assets/images/groceries.png')} />
        <View className="flex-1 justify-end pb-20 gap-4">
            <View className="px-4">
                <Text className="text-3xl font-medium">Get your groceries</Text>
                <Text className="text-3xl font-medium">with nectar</Text>
            </View>
            <View className="w-[364px] px-4">
                <Link href={'/number'}>
                <TextInput keyboardType="phone-pad" placeholder="BD +880"/> 
                </Link>
            </View>
            <Text className="text-sm text-gray-400 font-medium text-center">Or connect with social media</Text>
            <View className="flex items-center gap-4">
                <TouchableOpacity className="bg-[#5383EC] rounded-xl h-[67px] w-[353px] flex-row items-center justify-between px-4">
                <FontAwesome name="google" size={24} color="white" />
                <Text className="text-lg text-white font-medium ">Continue with Google</Text>
                <View className="w-6" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#4A66AC] rounded-xl h-[67px] w-[353px] flex-row items-center justify-between px-4">
                <FontAwesome name="facebook" size={24} color="white" />
                <Text className="text-lg text-white  font-medium ">Continue with Facebook</Text>
                <View className="w-6" />
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
