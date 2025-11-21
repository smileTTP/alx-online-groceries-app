import FavCard from "@/components/common/favCard";
import { SAMPLE_DATA } from "@/constants/data";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight, TouchableOpacity} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const Favorite = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white">
                <View className="items-center mt-4"><Text className="text-2xl font-bold">My Favorites</Text></View>
                <ScrollView>
                <View className="mt-4 flex-1 gap-4 px-4">
                {SAMPLE_DATA.filter(product => product.type === 'Beverages').map((product, index) => (
                    <View key={index}>
                    <FavCard name={product.name} image={product.image} quantity={product.quantity} price={product.price} type={product.type} description={product.description}/>
                    </View>
                ))}
                </View>
                </ScrollView>
                <View className="items-center mb-4">
                <TouchableOpacity className="bg-[#53B175] rounded-xl h-[67px] w-[353px] px-6 py-6">
                <Text className="text-lg text-white text-center font-medium ">Add All To Cart</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Favorite;