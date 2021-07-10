import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetailScreen = ({ navigation, route }) => {
  const { title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default ProductDetailScreen;
