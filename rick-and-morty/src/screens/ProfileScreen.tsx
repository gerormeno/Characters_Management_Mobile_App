import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TypeCharacter } from "../types/character.type";
import { characters } from "../api/characters";
import { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { GenderTag } from "../components/Tags/GenderTag";
import { StatusTag } from "../components/Tags/StatusTag";
import { UbicationTag } from "../components/Tags/UbicationTag";
import { SpecieTag } from "../components/Tags/SpecieTag";

export const ProfileScreen = () => {
  const [character, setCharacter] = useState<TypeCharacter | null>(null);
  const route = useRoute<RouteProp<RootStackParamList, "Perfil">>();
  const { characterId } = route.params;

  useEffect(() => {
    characters
      .getById({ id: characterId })
      .then((r) => {
        setCharacter(r.data);
      })
      .catch((e) => {
        console.error(e);
      });
  });

  return (
    <View style={styles.container}>
      {character ? (
        <>
          <View style={styles.profileContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: character.image }}
                style={styles.image}
              ></Image>
            </View>
            <Text style={styles.title}>{character.name}</Text>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Genero:</Text>
              <GenderTag gender={character.gender} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Estado:</Text>
              <StatusTag status={character.status} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Especie:</Text>
              <SpecieTag specie={character.species} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Origen:</Text>
              <UbicationTag ubication={character.origin.name} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Ubicacion:</Text>
              <UbicationTag ubication={character.location.name} />
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(67, 85, 133)",
    flexDirection: "column",
    alignItems: "center",
  },
  profileContainer: {
    justifyContent: "space-around",
  },
  imageContainer: {
    padding: 10,
  },
  buttonsContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
  },
  editButton: {
    zIndex: 1,
    position: "absolute",
    bottom: 10,
    backgroundColor: "rgb(54, 48, 98)",
    right: 15,
    borderRadius: 100,
    padding: 15,
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#CCC",
    borderBottomWidth: 1,
    margin: 10,
  },
  contentField: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 2,
  },
  contentFieldLabel: {
    fontSize: 20,
  },
});
