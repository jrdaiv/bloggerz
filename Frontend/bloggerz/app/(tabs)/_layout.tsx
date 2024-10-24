import { Tabs } from 'expo-router';
import React from 'react';
import "../global.css"


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

    </Tabs>
  );
}
