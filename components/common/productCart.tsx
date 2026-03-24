import { ProductProps } from "@/interfaces"
import { View, Image, Text, TouchableOpacity } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductCart: React.FC<ProductProps> = ({ name, quantity, price, image, type, description }) => {
    return(
    <View className="w-[363.7275390625] h-[120px] border border-white rounded-lg p-3 flex-row justify-between items-center">
    <View className="flex-row items-center">
        <View className="mr-4">
            <Image source={image} resizeMode="contain" className="w-[80px] h-[80px]"/>
        </View>
        <View className="h-full justify-between py-1"> 
            <View className="items-start"> 
                <Text className="font-bold text-lg px-4">{name}</Text>
                <Text className="font-medium text-base text-gray-400 px-4">{quantity}, Price</Text>
            </View>
            <View className="flex-row items-center">
                <TouchableOpacity><Entypo name="minus" size={24} color="#7C7C7C" /></TouchableOpacity>
                <Text className="text-xl font-medium mx-3">1</Text>
                <TouchableOpacity className="border border-gray-100 rounded-lg"><Entypo name="plus" size={24} color="#00B36F" /></TouchableOpacity>
            </View>
        </View>
    </View>
    <View className="h-full justify-between py-1 items-end">
        <AntDesign name="close" size={24} color="#7C7C7C" />
        <Text className="font-bold text-xl">${price}</Text>
    </View>
    </View>
    )
}
export default ProductCart;