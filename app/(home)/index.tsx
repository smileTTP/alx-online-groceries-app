import Card from "@/components/common/card";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SAMPLE_DATA } from "@/constants/data";

const Home = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white">
                <Card name={SAMPLE_DATA[0].name} quantity={SAMPLE_DATA[0].quantity} price={SAMPLE_DATA[0].price} image={SAMPLE_DATA[0].image} type={SAMPLE_DATA[0].type} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Home;