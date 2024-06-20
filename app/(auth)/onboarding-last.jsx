import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

import { images } from "../../constants";
import {
  CustomButton,
  CustomNumber,
  CustomSocial,
  CustomSocial2,
} from "../../components";

const OnboardingLast = () => {
  return (
    <SafeAreaView className="bg-black h-full">
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
            className="w-[230px] h-[150px] top-[30px] left-[-30px]"
          />

          <View className="flex gap-12 justify-center">
            <Text className="text-3xl text-white font-bold left-12 top-[45px]">
              Made for all of
            </Text>
            <Text className="text-2xl text-white font-bold left-12 top-[10]">
              your days
            </Text>
            <Text className="text-xl text-white font-bold bottom-[19px] left-[50px]">
              Free on ME.
            </Text>
          </View>

          <CustomButton
            title="Sign up free"
            containerStyles="mt-7 bg-slate-600 rounded-3xl min-h-[42px] "
            handlePress={() => router.push("/sign-up")}
          />
          <CustomNumber
            title="Continue with phone number"
            containerStyles="mt-4 min-h-[42px]"
          />
          <CustomSocial2
            title="Continue with Google"
            containerStyles="mt-4 min-h-[42px]"
          />
          <CustomSocial
            title="Continue with Facebook"
            containerStyles="mt-4 min-h-[42px]"
          />
          <CustomButton
            title="Log In"
            containerStyles="mt-7 bottom-6 "
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnboardingLast;
