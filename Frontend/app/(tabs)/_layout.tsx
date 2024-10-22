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
          headerPressOpacity: 0.5,
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
            headerTintColor: 'greenyellow', 
            tabBarIcon: () => <Icon
              name='home'
              size={24}
              style={{
                color: 'greenyellow',
                fontWeight: 'bold',

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
                color: 'greenyellow',
                fontWeight: 'bold',
              }}
            />
          }} />
              <Tabs.Screen
                name='bookmark'
                options={{
                  title: "Favorites",
                  headerShown: false,
                  tabBarIcon: () => <Icon
                  name='heart'
                  size={24}
                  style={{
                    color: 'greenyellow',
                    fontWeight: 'bold',
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
                        color: 'greenyellow',
                        fontWeight: 'bold',
                      }}
                    />
                  }} />
      </Tabs>
    </>
  )
}

export default TabsLayout