import { Stack, Slot } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "greenyellow",
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          color: "black",
        },
        
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "LandingPage",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
