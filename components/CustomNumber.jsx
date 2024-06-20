import {
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { images } from "../constants";

const CustomNumber = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-white border-black-400 border rounded-2xl min-h-[42px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <View className="flex flex-row gap-6">
        <Image
          source={images.phoneicon}
          className="w-[20px] h-[30px]"
          resizeMode="contain"
        />
        <Text className={`text-black font-medium text-base ${textStyles}`}>
          {title}
        </Text>
      </View>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomNumber;
