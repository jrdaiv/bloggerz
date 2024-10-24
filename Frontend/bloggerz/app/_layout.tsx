import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css"


export default function RootLayout() {
  
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "black"
      }
      ,headerTintColor: "white"
    }}>
      
    </Stack>
  );
}
