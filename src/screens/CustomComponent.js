import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = () => {
  const myName = "Dhruv Gharat";

  return <Text style={styles.textStyle}>Hello! I am {myName}</Text>;
};

const styles = StyleSheet.create({
  textStyle: { color: "red" },
});

export default CustomComponent;
