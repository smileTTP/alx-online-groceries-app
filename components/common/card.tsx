import { ProductProps } from "@/interfaces";
import { Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Card: React.FC<ProductProps> = ({ name, quantity, price, image, type, description }) => {
    return (
        <View className="w-[173.3249969482422px] h-[248.50999450683594px] border border-gray-200 rounded-lg">
            <View className="mt-4 items-center">
                <Image source={image} className="w-[99.88697814941445px] h-[79.43215179443389px]" resizeMode="cover"/>
            </View>
            <View className="mt-4">
                <Text className="px-4 mt-4 font-bold text-lg">
                {name}
                </Text>
                <Text className="px-4 text-sm font-medium">{quantity}, price</Text>
            </View>
            <View className="absolute bottom-4 inset-x-4 flex-row justify-between items-center">
            <Text className="px-4 mt-4 font-bold text-xl">{price}$</Text>
            <TouchableOpacity className="w-[45.66999816894531px] h-[45.66999816894531px] bg-[#00B36F] p-2 flex items-center justify-center rounded-2xl">
                <FontAwesome6 name="add" size={24} color="white"/>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Card;