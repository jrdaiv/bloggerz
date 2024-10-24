import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import "../global.css"

const handleLogin = () => {
  return null
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView
      className=''
      style={{
        backgroundColor: 'black'
      }}
      >
        <View style={{ backgroundColor: "black "}}>
          <View style={{ 
            justifyContent: 'center', 
            alignItems: 'center',
            height: 300,
            backgroundColor: 'black',
            borderBottomLeftRadius: 120,
            borderBottomRightRadius: 120

            }}>
            <Text style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center'
            }}>Welcome to Bloggerz</Text>
          </View>
          <View>
            <Text style={{ height: 20, color: "white", fontSize: 20}}>
              Please Login or Signup to proceed.
            </Text>
            <View style={{}}>
              <Button title="Login" onPress={handleLogin} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

