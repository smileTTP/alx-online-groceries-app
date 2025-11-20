import Card from "@/components/common/card";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
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
            <ScrollView>
            <View className="mt-4 items-center">
                <Image source={require('@/assets/images/banner.png')}/>
            </View>
            <View className="mt-4">
            <View className="flex-row justify-between px-4">
                <Text className="text-3xl font-medium">Exclusive Offer</Text>
                <Text className="text-sm font-medium text-green-600">See all</Text>
            </View>
            <View className="flex-row justify-center gap-4 mt-4">
                <Card name={SAMPLE_DATA[0].name} quantity={SAMPLE_DATA[0].quantity} price={SAMPLE_DATA[0].price} image={SAMPLE_DATA[0].image} type={SAMPLE_DATA[0].type} description={SAMPLE_DATA[0].description} />
                <Card name={SAMPLE_DATA[0].name} quantity={SAMPLE_DATA[1].quantity} price={SAMPLE_DATA[1].price} image={SAMPLE_DATA[1].image} type={SAMPLE_DATA[1].type} description={SAMPLE_DATA[1].description} />
            </View>
            </View>
            <View className="mt-4">
            <View className="flex-row justify-between px-4">
                <Text className="text-3xl font-medium">Best Selling</Text>
                <Text className="text-sm font-medium text-green-600">See all</Text>
            </View>
            <View className="flex-row justify-center gap-4 mt-4">
                <Card name={SAMPLE_DATA[2].name} quantity={SAMPLE_DATA[2].quantity} price={SAMPLE_DATA[2].price} image={SAMPLE_DATA[2].image} type={SAMPLE_DATA[2].type} description={SAMPLE_DATA[2].description} />
                <Card name={SAMPLE_DATA[3].name} quantity={SAMPLE_DATA[3].quantity} price={SAMPLE_DATA[3].price} image={SAMPLE_DATA[3].image} type={SAMPLE_DATA[3].type} description={SAMPLE_DATA[3].description} />
            </View>
            </View>
            <View className="mt-4">
            <View className="flex-row justify-between px-4">
                <Text className="text-3xl font-medium">Groceries</Text>
                <Text className="text-sm font-medium text-green-600">See all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
                <View className="align-center p-2 flex flex-row gap-4 px-4">
                <View className="w-[248px] h-[105px] inset-x-4 flex-row justify-between items-center px-4 p-2"><Image source={require('@/assets/filters/pulses.png')} className="w-full h-full" resizeMode="contain"/><Text className="ml-4 text-lg">Pulses</Text></View>
                <View className="w-[248px] h-[105px] inset-x-4 flex-row justify-between items-center px-4 p-2"><Image source={require('@/assets/filters/rice.png')} className="w-full h-full" resizeMode="contain"/><Text className="ml-4 text-lg">Rice</Text></View>
                <View className="w-[248px] h-[105px] inset-x-4 flex-row justify-between items-center px-4 p-2"><Image source={require('@/assets/filters/beverages.png')} className="w-full h-full" resizeMode="contain"/><Text className="ml-4 text-lg">Beverages</Text></View>
                </View>
            </ScrollView>
            <View className="flex-row justify-center gap-4 mt-4">
                <Card name={SAMPLE_DATA[4].name} quantity={SAMPLE_DATA[4].quantity} price={SAMPLE_DATA[4].price} image={SAMPLE_DATA[4].image} type={SAMPLE_DATA[4].type} description={SAMPLE_DATA[4].description} />
                <Card name={SAMPLE_DATA[5].name} quantity={SAMPLE_DATA[5].quantity} price={SAMPLE_DATA[5].price} image={SAMPLE_DATA[5].image} type={SAMPLE_DATA[5].type} description={SAMPLE_DATA[5].description} />
            </View>
            </View>
            </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Home;