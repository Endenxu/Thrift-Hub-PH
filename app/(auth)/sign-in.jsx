import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import {
  CustomButton,
  CustomSocial,
  CustomSocial2,
  CustomSocial3,
  CustomToggle,
  FormField,
} from "../../components";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View
          className="w-full flex h-full px-4"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.aifllogo}
            resizeMode="contain"
            className="w-[230px] h-[120px] left-12 m-0"
          />

          <FormField
            placeholder="Username or Email"
            placeholderTextColor="#000"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="bot-3"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="Password"
            placeholderTextColor="#000"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="bot-3"
          />

          <View className="flex flex-row gap-12 justify-center top-4">
            <Text className="text-sm text-black font-pregular underline ">
              Reset Password
            </Text>
            <Text className="text-sm text-black font-pregular underline">
              Forgot Password
            </Text>
          </View>

          <View className="flex flex-row gap-[11px] justify-between top-8">
            <Text className="flex font-pbold text-black left-[10px]">
              Remember me
            </Text>
            <CustomToggle className="flex" />
          </View>

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7 top-4"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center flex-row bottom-2">
            <Text className="text-sm text-black pt-5 font-bold mt-4 mb-4">
              OR
            </Text>
          </View>

          <CustomSocial
            title="Continue with Facebook"
            handlePress={submit}
            containerStyles="mt-4 bottom-3"
            isLoading={isSubmitting}
          />
          <CustomSocial2
            title="Continue with Google"
            handlePress={submit}
            containerStyles="mt-4 bottom-3"
            isLoading={isSubmitting}
          />
          <CustomSocial3
            title="Continue with Apple"
            handlePress={submit}
            containerStyles="mt-4 mb-2 bottom-3"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2 bottom-3">
            <Text className="text-sm text-black font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-base font-psemibold text-bold text-black underline"
            >
              Signup
            </Link>
          </View>
          <View className="flex justify-center flex-row mt-3 bottom-6">
            <Text className="text-black font-bold text-lg">SETTINGS</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
