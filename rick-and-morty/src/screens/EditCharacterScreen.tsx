import { StyleSheet, ScrollView } from "react-native";
import { CharacterForm } from "../components/Forms/CharacterForm";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

export const EditCharacterScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Modificar">>();
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <CharacterForm initialFormState={character} action="EDIT" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(67, 85, 133)",
  },
});
