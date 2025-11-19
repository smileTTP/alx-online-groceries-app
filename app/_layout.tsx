import '@/styles/global.css';
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='signin'/>
      <Stack.Screen name='number'/>
      <Stack.Screen name='verification'/>
      <Stack.Screen name='location'/>
      <Stack.Screen name='login'/>
      <Stack.Screen name='signup'/>
    </Stack>;
}