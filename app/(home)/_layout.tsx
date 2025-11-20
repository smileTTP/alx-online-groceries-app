import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
    return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false,
    }} >
    <Tabs.Screen name="index" options={{
        title: 'Shop',
        tabBarIcon: ({ color }) => <AntDesign name="shop" size={24} color={color} />,
    }} />
    <Tabs.Screen name="explore" options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => <AntDesign name="file-search" size={24} color={color} />,
    }} />
    <Tabs.Screen name="cart" options={{
        title: 'Cart',
        tabBarIcon: ({ color }) => <AntDesign name="shopping-cart" size={27} color={color} />
    }} />
    <Tabs.Screen name="favorite" options={{
        title: 'Favorite',
        tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />
    }} />
    <Tabs.Screen name="account" options={{
        title: 'Account',
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />
    }} />
    </Tabs>
)
}

export default HomeRootLayout;