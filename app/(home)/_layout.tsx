import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
    return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
    }} >
    <Tabs.Screen name="index" options={{
        title: 'Shop',
        tabBarIcon: ({ color }) => <AntDesign name="shop" size={24} color={color} />,
    }} />
    <Tabs.Screen name="explore" options={{
        title: 'Explore',
        headerShown: true,
        tabBarIcon: ({ color }) => <AntDesign name="file-search" size={24} color={color} />,
    }} />
    <Tabs.Screen name="cart" options={{
        title: 'Cart',
        headerShown: true,
        tabBarIcon: ({ color }) => <AntDesign name="shopping-cart" size={27} color={color} />
    }} />
    <Tabs.Screen name="favorite" options={{
        title: 'Favorite',
        headerShown: true,
        tabBarIcon: ({ color }) => <EvilIcons name="heart" size={24} color={color} />
    }} />
    <Tabs.Screen name="account" options={{
        title: 'Account',
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />
    }} />
    </Tabs>
)
}

export default HomeRootLayout;