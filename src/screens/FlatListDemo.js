import React from "react";
import { Text, StyleSheet, FlatList, View, Image, Button } from "react-native";

const FlatListDemo = ({ route, navigation }) => {
  const { myName } = route.params;
  const url = "../../assets/text2.jpeg";
  const netflixSeries = [
    {
      imgSrc: "../../assets/text1.webp",
      name: "Paris",
      year: "2020",
      Creator: "Darren Star",
      Genre: "Romance, Drama",
    },
    {
      imgSrc: "../../assets/text1.webp",
      name: "Death Note",
      year: "2021",
      Creator: "SS Raja",
      Genre: "Horror, thriller",
    },
    {
      name: "Archive 81",
      year: "2022",
      Creator: "Rebecca",
      Genre: "Horror, thriller",
    },
    {
      name: "Cheer",
      year: "2021 - 2022",
      Creator: "Greg Whiteley",
      Genre: "Docuseries",
    },
    {
      name: "KGF",
      year: "2023",
      Creator: "Darren Star",
      Genre: "Action, Drama",
    },
  ];

  return (
    <View style={{ backgroundColor: "black" }}>
      <Text style={{ color: "white", textAlign: "center" }}>
        Welcome {myName}
      </Text>
      <Text style={styles.textStyleOne}>List of Top 10 Series in Netflix</Text>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
          return key.name;
        }}
        horizontal
        // inverted
        showsHorizontalScrollIndicator={false}
        data={netflixSeries}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Image style={styles.imageStyle} source={require(url)} />
              <Text style={styles.textStyle}>Name : {item.name}</Text>
              <Text style={styles.textStyle}>Creator : {item.Creator}</Text>
              <Text style={styles.textStyle}>Year : {item.year}</Text>
              <Text style={styles.textStyle}>Genre : {item.Genre}</Text>
            </View>
          );
        }}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: { textAlign: "center", padding: 5, backgroundColor: "black" },
  imageStyle: { height: 100, width: 150 },
  textStyle: { color: "white", marginHorizontal: 10 },
  viewStyle: {
    backgroundColor: "rgb(0,0,75)",
    margin: 10,
    height: 200,
    width: 150,
  },
  textStyleOne: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
});

export default FlatListDemo;
