import React, { useState } from "react";
import { View } from "react-native";
import Checkbox from "expo-checkbox";

const CustomCheckbox = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View className="flex flex-row top-4">
      <Checkbox
        disabled={false}
        value={isChecked}
        onValueChange={setChecked}
        className="items-center justify-center"
      />
    </View>
  );
};

export default CustomCheckbox;
