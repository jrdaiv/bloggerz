import { Link } from "expo-router";
import { Text, View } from "react-native";

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
      <Text>Welcome, {"\n"} Bloggerz !</Text>
      <Link href="/home">Go to Home Page</Link>
    </View>
  );
}
