import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const CardDetail = ({ textData, imgSrc }) => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>{textData}</Text>
      <Image style={styles.imageStyle} source={imgSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: { height: 350, width: "100%" },
});

export default CardDetail;
