import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormFieldsignup = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 bottom-12 ${otherStyles}`}>
      <Text className="text-sm text-black-500 font-bold">{title}</Text>

      <View className="w-full h-[43px] px-4 bg-white rounded-2xl border-slate-300 border-2 focus:border-black flex flex-row items-center">
        <TextInput
          className="flex-1 text-black-950 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ccfbf1"
          onChangeText={handleChangeText}
          secureTextEntry={placeholder === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {title === "Create a Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {title === "Re-type Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFieldsignup;
