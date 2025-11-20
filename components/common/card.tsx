import { ProductProps } from "@/interfaces";
import { Text, View, Image } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Card: React.FC<ProductProps> = ({ name, quantity, price, image, type }) => {
    return (
        <View className="w-[173.3249969482422px] h-[248.50999450683594px] border border-gray-400 rounded-lg">
            <Image source={image} className="w-[99.88697814941445px] h-[79.43215179443389px]" resizeMode="cover"/>
            <FontAwesome6 name="add" size={24} color="black" />
        </View>
    )
}
export default Card;