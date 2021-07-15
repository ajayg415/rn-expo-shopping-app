import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

const EditProductScreen = ({ route }) => {
  const { item } = route.params;
  console.log({ item });
  return (
    <View>
      <Text>EditProductScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProductScreen;
