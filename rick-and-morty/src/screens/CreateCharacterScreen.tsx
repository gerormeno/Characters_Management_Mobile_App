import { StyleSheet, ScrollView } from "react-native";
import { CharacterForm } from "../components/Forms/CharacterForm";
import { TypeCustomCharacter } from "../types/customCharacter.type";
import { defaultProfileAvatar } from "../images/default_avatar_base64";


export const CreateCharacterScreen = () => {

  

  const INITIAL_FORM_STATE: TypeCustomCharacter = {
    id: "",
    name: "",
    age: "",
    gender: "",
    origin: "",
    status: "",
    image: `data:image/png;base64,${defaultProfileAvatar}`,
  };
  
    return (
      <ScrollView style={styles.container}>
        <CharacterForm initialFormState={INITIAL_FORM_STATE} action="CREATE"/>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(67, 85, 133)",
    },
  })