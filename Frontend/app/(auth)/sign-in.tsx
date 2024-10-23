import { View, Text, SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const ipAddress = process.env.IP_ADDRESS
  const port = 5000

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://${ipAddress}:${port}/api/users/login`,
        { email, password });
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
      setLoading(false);
    }
  };



  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Email:</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
          </View>

          <View>
            <Text>Password:</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
          </View>

          <Button title={loading ? 'Logging in...' : 'Log In'} onPress={handleLogin} />

          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </ScrollView>
      </SafeAreaView>

    </>
  )
}

export default SignInPage