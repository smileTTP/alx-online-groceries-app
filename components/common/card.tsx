import { ProductProps } from "@/interfaces";
import { Text, View, Image } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Card: React.FC<ProductProps> = ({ name, quantity, price, image, type }) => {
    return (
        <View>
            <FontAwesome6 name="add" size={24} color="black" />
        </View>
    )
}
export default Card;