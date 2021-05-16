import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = (props) => {
  return (
    <View
      style={[
        props.style,
        { alignItems: "center", marginVertical: 4, paddingVertical: 8 },
      ]}
    >
      <Text style={{ color: "white" }}>{props.colorName}</Text>
    </View>
  );
};

export default ColorBox;
