import React from "react";
import { Text, StyleSheet, View } from "react-native";

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.childText1, styles.commonStyle]}> Box - 1 </Text>
      <Text style={[styles.childText2, styles.commonStyle]}> Box - 2 </Text>
      <Text style={[styles.childText3, styles.commonStyle]}> Box - 3 </Text>
      <Text style={[styles.childText4, styles.commonStyle]}> Box - 4 </Text>
      <Text style={[styles.childText5, styles.commonStyle]}> Box - 5 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    margin: 25,
    height: 300,
    display: "flex",
    // flexDirection: "row-reverse",
    // justifyContent: "center",
    // alignItems: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  commonStyle: {
    textAlign: "center",
    // width: 50,
    height: 50,
    textAlignVertical: "center",
  },
  childText1: { backgroundColor: "rgb(255,0,100)" },
  childText2: { backgroundColor: "rgb(100,100,100)" },
  childText3: { backgroundColor: "rgb(0,100,100)", alignSelf: "flex-start" },
  childText4: { backgroundColor: "rgb(100,0,255)", alignSelf: "stretch" },
  childText5: { backgroundColor: "rgb(0,100,255)" },
});

export default FlexBox;
