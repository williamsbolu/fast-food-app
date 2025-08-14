import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    const { name, email, password } = form;

    if (!name || !email || !password)
      return Alert.alert("Error", "Please enter valid email address.");

    setIsSubmitting(true);

    try {
      await createUser({
        email,
        name,
        password,
      });

      Alert.alert("Success", "User signed in successfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your full aname"
        value={form.name}
        onChangeText={(text) =>
          setForm((prevstate) => ({
            ...prevstate,
            name: text,
          }))
        }
        secureTextEntry={false}
        label="Full name"
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) =>
          setForm((prevstate) => ({
            ...prevstate,
            email: text,
          }))
        }
        secureTextEntry={false}
        label="Email"
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prevstate) => ({
            ...prevstate,
            password: text,
          }))
        }
        label="Password"
        secureTextEntry={true}
      />

      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;

// <Button title="Sign In" onPress={() => router.push("/sign-in")} />
