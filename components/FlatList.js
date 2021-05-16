import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Color = ({ colorName, hexCode }) => {
  return (
    <View style={{ backgroundColor: hexCode }}>
      <Text>{colorName}</Text>
    </View>
  );
};

const colors = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const FlatListComp = () => {
  return (
    <View style={styles.flatListSec}>
      <Text style={{ paddingVertical: 4 }}>Example 2 - FlatList</Text>
      <FlatList
        style
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={(data) => (
          <Color colorName={data.item.colorName} hexCode={data.item.hexCode} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListSec: {
    borderWidth: 1,
    borderColor: "black",
    padding: 4,
    marginVertical: 8,
  },
  color: {
    backgroundColor: "coral",
    alignItems: "center",
    marginVertical: 4,
    padding: 4,
  },
});

export default FlatListComp;
