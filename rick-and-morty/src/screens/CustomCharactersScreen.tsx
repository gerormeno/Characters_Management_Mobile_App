import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { CustomCharacterCardCollection } from "../components/Cards/CustomCharacterCardCollection";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "../redux/hooks";
import { deleteCharacters } from "../redux/slices/customCharacters.slice";
import { Entypo } from "@expo/vector-icons";

export const CustomCharactersScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
  const [selectMode, setSelectMode] = useState(false);

  const handleCreateCharacter = () => {
    navigation.navigate("Crear");
  };

  const handleDeleteCharacters = () => {
    dispatch(deleteCharacters(selectedCharacters));
    setSelectMode(false);
  };

  const selectCharacter = (id: string) => {
    setSelectedCharacters((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((characterId) => characterId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const activateSelectMode = () => {
    setSelectMode((prevState) => !prevState);
    setSelectedCharacters([]);
  };

  return (
    <View style={styles.container}>
      <CustomCharacterCardCollection
        selectCharacter={selectCharacter}
        selectedCharacters={selectedCharacters}
        selectMode={selectMode}
      />
      <View style={styles.buttonsContainer}>
        {!selectMode && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleCreateCharacter}
          >
            <Ionicons name="person-add-sharp" size={35} color="#ccc" />
          </TouchableOpacity>
        )}
        {selectMode && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleDeleteCharacters}
          >
            <Entypo name="check" size={35} color="#ccc" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => activateSelectMode()}
        >
          {selectMode ? (
            <Entypo name="cross" size={35} color="#ccc" />
          ) : (
            <Ionicons name="ios-trash-sharp" size={35} color="#ccc" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(67, 85, 133)",
  },
  buttonsContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 10,
    right: 15,
  },
  button: {
    padding: 15,
    backgroundColor: "rgb(54, 48, 98)",
    borderRadius: 100,
    marginVertical: 4,
  },
});
