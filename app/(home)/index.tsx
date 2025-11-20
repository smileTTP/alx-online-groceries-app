import Card from "@/components/common/card";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SAMPLE_DATA } from "@/constants/data";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const Home = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white gap-4">
            <View className="mt-4 items-center">
                <Image source={require('@/assets/images/carrot.png')} className="h-[55px] w-[47px] mt-4"/>
                <View className="flex-row justify-center items-center mt-4">
                <Entypo name="location-pin" size={18} color="gray" />
                <Text className="text-gray-500 font-medium">Dhaka, Banassre</Text>
                </View>
            </View>
            <View className="px-4">
            <View className="flex-row items-center justify-between p-4 px-4 mt-1 border-gray-100 border rounded-xl">
                <Feather name="search" size={24} color="gray" />
                <TextInput keyboardType="default" className="w-[330px] flex-1" />
            </View>
            </View>
            <View className="mt-4 items-center">
                <Image source={require('@/assets/images/banner.png')}/>
            </View>
            <Card name={SAMPLE_DATA[0].name} quantity={SAMPLE_DATA[0].quantity} price={SAMPLE_DATA[0].price} image={SAMPLE_DATA[0].image} type={SAMPLE_DATA[0].type} description={SAMPLE_DATA[0].description} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Home;