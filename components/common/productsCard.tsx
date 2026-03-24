import { FitlersProps } from "@/interfaces";
import { Text, View, Image } from "react-native";

const ProductsCard: React.FC<FitlersProps> = ({ name, image }) => {
    return (
        <View className="w-[174.5px] h-[189.10609436035156px] border border-gray-200 rounded-lg items-center">
            <View className="mt-4 items-center">
                <Image source={image} className="w-[99px] h-[79px] mt-4" resizeMode="contain"/>
            </View>
            <View className="mt-4 absolute bottom-4 items-center px-4">
                <Text className="font-bold text-lg">
                {name}
                </Text>
            </View>
        </View>
    )
}
export default ProductsCard;