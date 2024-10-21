import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 1,
            borderTopColor: 'greenyellow'
            
          },
        }}

      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: () => <Icon
              name='home'
              size={24}
              style={{
                color: 'greenyellow'
              }}
            />
          }} />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: () => <Icon
              name='person'
              size={24}
              style={{
                color: 'greenyellow'
              }}
            />
          }} />
        <Tabs.Screen
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: () => <Icon
              name='create'
              size={24}
              style={{
                color: 'greenyellow'
              }}
            />
          }} />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: () => <Icon
              name='bookmark'
              size={24}
              style={{
                color: 'greenyellow'
              }}
            />
          }} />
      </Tabs>
    </>
  )
}

export default TabsLayout