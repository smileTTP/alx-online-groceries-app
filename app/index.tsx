import { Link } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ImageBackground source={require('@/assets/images/backgroundimage.png')} resizeMode="cover" className="flex-1">
        <View className="flex-1 justify-end pb-20 items-center gap-4">
          <Image source={require('@/assets/images/whitecarrot.png')} className="w-[48px] h-[56px]"/>
          <Text className="text-5xl font-bold text-white text-center">Welcome</Text>
          <Text className="text-5xl font-bold text-white text-center">to our store</Text>
          <View>
            <Text className="text-base text-[#FCFCFCB2] font-medium">Ger your groceries in as fast as one hour</Text>
          </View>
          <TouchableOpacity className="bg-[#53B175] rounded-xl h-[67px] w-[353px] px-6 py-6">
            <Link href={'/signin'}>
            <Text className="text-lg text-white text-center font-medium ">Get Started</Text>
            </Link>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}