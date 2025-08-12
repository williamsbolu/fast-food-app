import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Button title="Sign Up" onPress={() => router.push("/sign-in")} />
    </View>
  );
};

export default SignIn;
