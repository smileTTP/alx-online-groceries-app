import ProductCart from "@/components/common/productCart";
import { SAMPLE_DATA } from "@/constants/data";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const Cart = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white">
                <View className="items-center mt-4">
                    <Text className="text-2xl font-bold">My Cart</Text>
                </View>
                <View className="mt-4 flex-1 gap-4 px-4">
                {SAMPLE_DATA.map((product, index) => (
                    <View key={index} className="">
                    <ProductCart name={product.name} image={product.image} quantity={product.quantity} price={product.price} type={product.type} description={product.description}/>
                    </View>
                ))}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Cart;