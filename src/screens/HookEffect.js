import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";

const HookEffect = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={{ backgroundColor: "pink" }}>
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <FlatList
            keyExtractor={(key) => {
              return key.id;
            }}
            data={myUserData}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: "grey",
                    width: 150,
                    alignSelf: "center",
                    margin: 10,
                  }}
                >
                  <Image
                    style={{ height: 150, width: 150 }}
                    source={{ uri: item.image }}
                  />
                  <Text>{item.name}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.mobile}</Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HookEffect;
