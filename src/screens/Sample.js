import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  VirtualizedList,
} from "react-native";
import NetflixCard from "../components/NetflixCard";
import BoxModel from "./BoxModel";
import CounterNumber from "./CounterNumber";
import CustomComponent from "./CustomComponent";
import FlexBox from "./FlexBox";
import HookEffect from "./HookEffect";
import ImageFile from "./Images";
import OurButton from "./OurButton";
import VirtualizedScrollView from "./VirtualizedScrollView";

const Sample = () => {
  const myElement = <Text style={styles.textStyle2}>I am a element</Text>;
  const getFullName = (firstName, fatherName, surName) => {
    return `Hi my name is ${firstName} ${fatherName} ${surName}`;
  };
  return (
    <VirtualizedScrollView>
      <Text style={[styles.textStyle, styles.commonStyle]}>This is myApp</Text>
      <CustomComponent />
      {myElement}
      <Text>{getFullName("Dhruv", "Rajkumar", "Gharat")}</Text>
      <OurButton />
      <ImageFile />
      <NetflixCard />
      <BoxModel />
      <FlexBox />
      <CounterNumber />
      <HookEffect />
    </VirtualizedScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: { marginTop: 100, marginBottom: 50, textAlign: "center" },
  commonStyle: { fontSize: 40, color: "blue", fontWeight: "bold" },
  textStyle2: { marginTop: 25, color: "pink" },
});

export default Sample;
