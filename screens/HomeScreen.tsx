import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";
// import db from "../firebase";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
