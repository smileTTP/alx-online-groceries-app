import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6, MaterialCommunityIcons, SimpleLineIcons, MaterialIcons, Feather, Ionicons, AntDesign } from "@expo/vector-icons";

const Profile = () => {
    return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1 p-4 bg-white">
        <View className="mb-10 flex-row items-center rounded-md justify-between px-4 mt-4">
            <View className="flex-row items-center gap-4">
            <Image source={require("@/assets/images/avatar.png")} />
            <View>
                <Text className=" font-semibold text-xl">
                Afsar Hossen
                </Text>
                <Text className="text-base font-thin text-gray-600">Imshuvo97@gmail.com</Text>
            </View>
            </View>
            <Feather name="edit-2" size={24} color="black" />
        </View>

        <View className="h-[350px] gap-3 bg-white rounded-md p-4 mb-4">
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <Feather name="shopping-bag" size={24} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">Orders</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <MaterialCommunityIcons name="card-account-details-outline" size={22} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">My Details</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <SimpleLineIcons name="location-pin" size={24} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">Delivery Address</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <FontAwesome6 name="credit-card" size={20} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">Payment Methods</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <Ionicons name="ticket-outline" size={24} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">Promo Cord</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <Ionicons name="notifications-outline" size={24} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">Notifications</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <Feather name="help-circle" size={24} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">Help</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 items-center justify-center rounded-full ">
                <AntDesign name="exclamation-circle" size={24} color="black" />
                </View>
                <View>
                <Text className="text-xl font-medium">About</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </TouchableOpacity>
            <View className="">
                <TouchableOpacity className="bg-[#F2F3F2] rounded-xl h-[67px] w-[353px] flex-row items-center justify-between px-4 mt-4">
                <Ionicons name="exit-outline" size={26} color="#53B175" />
                <Text className="text-xl text-[#53B175]  font-medium ">Log Out</Text>
                <View className="w-6" />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    </SafeAreaProvider>
    );
};

export default Profile;