import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import ColorBox from "./components/ColorBox";
import FlatListComp from "./components/FlatList";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingText}>Learning React Native</Text>
        <View style={{ borderColor: "black", borderWidth: 1, padding: 4 }}>
          <Text style={{ paddingVertical: 4 }}>
            Example 1 - Making Simple Boxes
          </Text>
          <View>
            <ColorBox style={styles.red} colorName="Red" />
            <ColorBox style={styles.green} colorName="Green" />
            <ColorBox style={styles.black} colorName="Black" />
            <ColorBox style={styles.gray} colorName="Gray" />
          </View>
        </View>
        <FlatListComp />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  headingText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 8,
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  gray: {
    backgroundColor: "gray",
  },
  black: {
    backgroundColor: "black",
  },
});

export default App;
