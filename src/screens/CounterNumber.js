import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CounterNumber = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ borderWidth: 2, margin: 20 }}>
      <Text style={{ textAlign: "center", margin: 20 }}>{counter}</Text>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
        }}
      >
        <Text style={styles.buttonStyle}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCounter(0);
        }}
      >
        <Text style={styles.buttonStyle}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (counter != 0) setCounter(counter - 1);
        }}
      >
        <Text style={styles.buttonStyle}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: 100,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    margin: 25,
    borderRadius: 15,
  },
});

export default CounterNumber;
