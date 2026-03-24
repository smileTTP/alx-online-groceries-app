import { ProductProps } from "@/interfaces";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const FavCard: React.FC<ProductProps> = ({ name, quantity, price, image, type, description }) => {
    return(
        <View>
            <View className="flex-row items-center bg-white p-3 rounded-lg">
                <Image source={image} resizeMode="contain" className="w-[80px] h-[80px]"/>
                <View className="flex-1 ml-3 justify-center gap-2 px-4">
                <Text className="font-bold text-lg">{name}</Text>
                <Text className="font-medium text-sm text-gray-400">{quantity}, Price</Text>
                </View>
                <View className="flex-row items-center px-4">
                <Text className="font-bold text-lg">${price}</Text>
                </View>
                <TouchableOpacity>
                <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FavCard;