import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Bookmark = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ScrollView>
          <View>
            <Text style={{ color: "white", }}>Bookmark</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Bookmark