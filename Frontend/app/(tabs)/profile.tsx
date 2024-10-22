import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const Profile = () => {
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
            <Text style={styles.text}>Profile</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  }
})

export default Profile