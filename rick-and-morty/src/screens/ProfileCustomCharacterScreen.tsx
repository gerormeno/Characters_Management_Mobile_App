import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GenderTag } from "../components/Tags/GenderTag";
import { StatusTag } from "../components/Tags/StatusTag";
import { UbicationTag } from "../components/Tags/UbicationTag";
import { AgeTag } from "../components/Tags/AgeTag";

export const ProfileCustomCharacterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "Detalles">>();
  const { character } = route.params;

  const handlePress = () => {
    navigation.navigate("Modificar", { character: character });
  };

  return (
    <View style={styles.container}>
      {character ? (
        <>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: character.image }}
                style={styles.image}
              ></Image>
            </View>
            <Text style={styles.title}>{character.name}</Text>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Edad:</Text>
              <AgeTag age={character.age} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Genero:</Text>
              <GenderTag gender={character.gender} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Estado:</Text>
              <StatusTag status={character.status} />
            </View>
            <View style={styles.contentField}>
              <Text style={styles.contentFieldLabel}>Origen:</Text>
              <UbicationTag ubication={character.origin} />
            </View>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={handlePress}>
            <MaterialCommunityIcons name="pencil" size={40} color="#ccc" />
          </TouchableOpacity>
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
