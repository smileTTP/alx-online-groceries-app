import ProductsCard from "@/components/common/productsCard";
import { FILTERS } from "@/constants/data";
import { Feather } from "@expo/vector-icons";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight, TouchableOpacity} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from "expo-router";

const Explore = () => {

    
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white gap-4">
            <View className="mt-4 flex-1">
            <View className="mt-4 items-center">
                <Text className="font-bold text-2xl">Find Products</Text>
            </View>
            <View className="px-4 mb-4">
            <View className="mt-4 flex-row items-center justify-between px-4 p-2 border-gray-100 border rounded-xl h-[51px]">
                <Feather name="search" size={24} color="gray" />
                <TextInput keyboardType="default" className="w-[330px] flex-1" />
                <TouchableOpacity>
                    <FontAwesome name="filter" size={24} color="#D3D3D3" />
                </TouchableOpacity>
            </View>
            </View>
            <View className="flex-1 mb-4">
            <ScrollView>
            <View className="flex flex-row flex-wrap p-2">
                {FILTERS.map((filter, index) => (
                    <View key={index} className="w-1/2 p-1">
                        <TouchableOpacity>
                            <ProductsCard name={filter.name} image={filter.image}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            </ScrollView>
            </View>
            </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Explore;