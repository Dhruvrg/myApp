import React from "react";
import { Text, View, Image, StyleSheet, Button, Linking } from "react-native";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix Card </Text>
      <View style={styles.poster}>
        <View>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/text4.webp")}
          />
        </View>
        <View style={{ alignItems: "center", padding: 10 }}>
          <Text
            style={{ fontSize: 20, textAlign: "center", letterSpacing: 2.5 }}
          >
            All Of Us Dead
          </Text>
          <Text style={{ lineHeight: 17.5, textAlign: "center" }}>
            Watch Unlimited Movies, TV Shows & Get Free Shipping Benefits With
            Prime Membership. Watch Latest & Exclusive Bollywood, Hollywood
            Movies, US TV & Kids Shows. Multiple Devices. High Quality. Low Data
            Usage. Types: Bollywood Movies, Hollywood Movies.
          </Text>
        </View>
        <Button
          title="Watch Now"
          onPress={() => Linking.openURL("https://www.netflix.com/browse")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 50, justifyContent: "center", alignItems: "center" },
  poster: { borderWidth: 1 },
  header: {
    fontSize: 35,
    fontStyle: "italic",
    marginBottom: 20,
    color: "rgb(255,0,0)",
    fontVariant: ["small-caps"],
    textShadowColor: "rgb(255,0,0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  imageStyle: { height: undefined, width: "100%", aspectRatio: 1 },
});

export default NetflixCard;
