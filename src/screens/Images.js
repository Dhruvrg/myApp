import React from "react";
import { View, StyleSheet } from "react-native";
import CardDetail from "../components/CardDetail";

const ImageFile = () => {
  return (
    <View style={styles.listStyle}>
      <CardDetail
        textData="This is my first img"
        imgSrc={require("../../assets/text1.webp")}
      />
      <CardDetail
        textData="This is my second img"
        imgSrc={require("../../assets/text2.jpeg")}
      />
      <CardDetail
        textData="This is my third img"
        imgSrc={require("../../assets/text3.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: { display: "flex", justifyContent: "center", alignItem: "center" },
});

export default ImageFile;
