import React from "react";
import { View, Text, FlatList } from "react-native";
import { Albums } from "../../types";
import AlbumComponent from "../Album";
import styles from "./styles";

// TODO: note: we have defined type album in the type file so we can import in any file
export type AlbumCategoryProps = {
  title: string;
  albums: [Albums];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container} >
      {/* {title of cat} */}
      <Text style={styles.title}>{props.title}</Text>
      {/* {list of album} */}
      <FlatList 
        data={props.albums}
        renderItem={({item}) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
 
export default AlbumCategory;
