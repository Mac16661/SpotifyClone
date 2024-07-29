import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import albumDetails from "../data/albumDetails";
import SongListItems from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItems song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AlbumScreen;
