import { FitlersProps } from "@/interfaces";
import { Text, View, Image } from "react-native";

const ProductsCard: React.FC<FitlersProps> = ({ name, image }) => {
    return (
        <View className="w-[174.5px] h-[189.10609436035156px] border border-gray-200 rounded-lg items-center">
            <View className="mt-4 items-center">
                <Image source={image} className="w-[99.88697814941445px] h-[79.43215179443389px]" resizeMode="cover"/>
            </View>
            <View className="mt-4">
                <Text className="px-4 mt-4 font-bold text-lg">
                {name}
                </Text>
            </View>
        </View>
    )
}
export default ProductsCard;