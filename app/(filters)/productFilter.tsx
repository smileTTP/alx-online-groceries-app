import { FitlersProps } from "@/interfaces";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SAMPLE_DATA } from "@/constants/data";
import { View } from "react-native";

const ProductsFilter: React.FC<FitlersProps> = ({ name }) => {
    return(
    <SafeAreaProvider>
        <SafeAreaView>
            <View>
                
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    )
}
export default ProductsFilter;