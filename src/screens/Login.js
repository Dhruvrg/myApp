import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  return (
    <View style={{ margin: 50 }}>
      <View>
        <Text>Enter your name : </Text>
        <TextInput
          style={{ borderWidth: 1, height: 35, width: 250 }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setUserName(value)}
        />
      </View>
      <View>
        <Text>Enter your password : </Text>
        <TextInput
          style={{ borderWidth: 1, height: 35, width: 250 }}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home", { myName: `${userName}` });
        }}
        style={{ alignSelf: "center", margin: 15 }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <Button
        title="All samples"
        onPress={() => navigation.navigate("Basic")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { color: "red" },
});

export default Login;
