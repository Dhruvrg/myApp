import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Button
        title="Join Now"
        onPress={() => {
          console.log("You have joined successfully");
          Alert.alert("You have Clicked");
        }}
        // disabled
      />
      <TouchableOpacity
        onPress={() => {
          console.log("You are login");
        }}
        // disabled
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/text1.webp")}
        />
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", margin: "7.5%" },
  imageStyle: { height: 350, width: "100%" },
});

export default OurButton;
