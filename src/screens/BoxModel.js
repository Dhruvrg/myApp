import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxModel = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.childText1, styles.commonStyle]}>Box - 1</Text>
      <Text style={[styles.childText2, styles.commonStyle]}>Box - 2</Text>
      <Text style={[styles.childText3, styles.commonStyle]}>Box - 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    margin: 25,
  },
  commonStyle: {
    color: "black",
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 15,
    textAlign: "center",
    paddingVertical: 30,
    margin: 10,
  },
  childText1: { backgroundColor: "rgb(255,0,0)" },
  childText2: { backgroundColor: "rgb(0,255,0)" },
  childText3: { backgroundColor: "rgb(0,0,255)" },
});

export default BoxModel;
