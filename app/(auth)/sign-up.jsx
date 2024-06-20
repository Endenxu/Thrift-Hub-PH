import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import { createUser } from "../../lib/appwrite";
import {
  CustomButton,
  CustomCheckbox,
  FormFieldsignup,
} from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

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
          className="w-full flex justify-center h-full px-4 my-1"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex flex-row pt-12 ">
            <Text className="text-lg font-semibold text-black mt-1 font-psemibold flex flex-row w-[250px] h-[100px] bottom-5">
              Create a new account{" "}
            </Text>
            <Image
              source={images.aifllogo}
              resizeMode="contain"
              className="w-[100px] h-[100px] flex flex-row right-3 bottom-12"
            />
          </View>

          <FormFieldsignup
            title="First Name"
            placeholder="Name"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-0"
          />

          <FormFieldsignup
            title="Last Name"
            placeholder="Last Name"
            otherStyles="mt-0"
          />

          <FormFieldsignup
            title="Email Address"
            placeholder="Email Address"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-0"
            keyboardType="email-address"
          />

          <FormFieldsignup
            title="Phone Number"
            placeholder="Phone"
            otherStyles="mt-0"
          />

          <FormFieldsignup
            title="Create a Password"
            placeholder="Create Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-0"
          />

          <FormFieldsignup
            title="Re-type Password"
            placeholder="Confirm Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-0"
          />
          <View className="flex flex-row gap-2 w-[300px] justify-center left-5">
            <CustomCheckbox />
            <Text className="text-xs font-pextralight">
              By Creating account, you are accepting terms & conditions
            </Text>
          </View>

          <CustomButton
            title="Register"
            handlePress={submit}
            containerStyles="mt-7 bottom-6"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2 bottom-9">
            <Text className="text-regular text-black font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-regular font-psemibold text-black"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
