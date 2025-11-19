import { Link } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, }}>
        <ImageBackground source={require('@/assets/images/backgroundimage.png')} resizeMode="cover"  style={{ flex: 1, }}>
        <View className="flex-1 justify-center items-center">
          <Image source={require('@/assets/images/whitecarrot.png')} className="w-[48px] h-[56px]"/>
          <Text className="text-5xl font-bold text-white">Welcome to our store</Text>
          <View>
            <Text className="text-base text-[#FCFCFCB2] font-medium">Ger your groceries in as fast as one hour</Text>
          </View>
          <TouchableOpacity className="bg-[#53B175] rounded-md">
            <Link href={'/signin'}>
            <Text className="text-lg">Get Started</Text>
            </Link>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}