import { ProductProps } from "@/interfaces";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ProductsDetails: React.FC<ProductProps> = ({ name, image, quantity, type, description, price }) => {
    return(
    <SafeAreaProvider>
        <SafeAreaView>
            <View>
            
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    )
}
export default ProductsDetails;