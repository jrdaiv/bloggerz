import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        Welcome, {"\n"} Bloggerz 
      </Text>
      <Link
        href="/sign-in"
        style={{
          color: "black",
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          backgroundColor: "greenyellow",
          padding: 10,
        }}
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        style={{
          color: "black",
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          backgroundColor: "greenyellow",
          padding: 10,
        }}
      >
        Sign Up
      </Link>
    </View>
  );
}
