import { View, Text, Image, StyleSheet } from "react-native";
import { StatusTag } from "../Tags/StatusTag";
import { GenderTag } from "../Tags/GenderTag";
import { SpecieTag } from "../Tags/SpecieTag";
import { UbicationTag } from "../Tags/UbicationTag";
import { AgeTag } from "../Tags/AgeTag";

type CharacterCardProps = {
  image: string;
  name: string;
  status: string;
  species?: string;
  location?: string;
  origin: string;
  gender: string;
  age?: string;
};

export const CharacterCard = ({
  image,
  name,
  species,
  status,
  location,
  origin,
  gender,
  age,
}: CharacterCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.tagsContainer}>
          <GenderTag gender={gender} />
          {age && <AgeTag age={age} />}
          <StatusTag status={status} />
          {species && <SpecieTag specie={species} />}
          {location && <UbicationTag ubication={location} />}
          <UbicationTag ubication={origin} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    margin: 8,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
