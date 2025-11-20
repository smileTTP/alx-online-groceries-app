import Card from "@/components/common/card";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SAMPLE_DATA } from "@/constants/data";
import Entypo from '@expo/vector-icons/Entypo';

const Home = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white">
            <View className="mt-4 items-center">
                <Image source={require('@/assets/images/carrot.png')} className="h-[55px] w-[47px] mt-4"/>
                <View className="flex-row justify-center items-center mt-4">
                <Entypo name="location-pin" size={18} color="gray" />
                <Text className="text-gray-500 font-medium">Dhaka, Banassre</Text>
                </View>
            </View>

            <Card name={SAMPLE_DATA[0].name} quantity={SAMPLE_DATA[0].quantity} price={SAMPLE_DATA[0].price} image={SAMPLE_DATA[0].image} type={SAMPLE_DATA[0].type} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Home;