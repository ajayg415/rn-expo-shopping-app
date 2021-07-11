import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const IconButton = ({
  iconName,
  onIconPress,
  iconSize = 23,
  iconColor = "white",
}) => {
  return (
    <View style={styles.iconWrapper}>
      <Ionicons
        name={iconName}
        size={iconSize}
        color={iconColor}
        onPress={onIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    marginHorizontal: 10,
  },
});

export default IconButton;
