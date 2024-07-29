import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const song = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on you",
  artist: "Helen",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      {/* {image cover} */}
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}> {song.artist}</Text>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <AntDesign name="hearto" size={24} color="white" />
        <FontAwesome name="play" size={24} color="white" />
      </View>
    </View>
  );
};

export default PlayerWidget;
