import {
  Text,
  Pressable,
  ListRenderItem,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CharacterCard } from "./CharacterCard";
import { useAppSelector } from "../../redux/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { TypeCustomCharacter } from "../../types/customCharacter.type";

type CustomCharacterCardCollectionProps = {
  selectCharacter: (id: string) => void;
  selectedCharacters: string[];
  selectMode: boolean;
};

export const CustomCharacterCardCollection = ({
  selectCharacter,
  selectedCharacters,
  selectMode,
}: CustomCharacterCardCollectionProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const isSelected = (id: string) => {
    return selectedCharacters.includes(id);
  };

  const renderItem: ListRenderItem<TypeCustomCharacter> = ({ item }) => (
    <View style={styles.container}>
      {selectMode && (
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isSelected(item.id) && styles.selected]}
            onPress={() => selectCharacter(item.id)}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={() =>
          selectMode ? selectCharacter(item.id) : handlePressCharacter(item)
        }
        key={item.id}
        style={selectMode && styles.selectMode}
      >
        <CharacterCard
          image={item.image}
          key={item.id}
          name={item.name}
          status={item.status}
          origin={item.origin}
          gender={item.gender}
          age={item.age}
        />
      </TouchableOpacity>
    </View>
  );

  const allCharacters: TypeCustomCharacter[] = useAppSelector(
    (state) => state.customCharacters.customCharacters
  );

  const handlePressCharacter = (character: TypeCustomCharacter) => {
    navigation.navigate("Detalles", { character: character });
  };

  return (
    <View>
      {allCharacters !== null && allCharacters?.length !== 0 ? (
        <FlatList
          data={allCharacters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No hay datos</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    position: "absolute",
    left: 10,
    top: 70,
  },
  checkbox: {
    backgroundColor: "rgb(67, 85, 133)",
    borderRadius: 100,
    borderWidth: 2,
    width: 20,
    height: 20,
  },
  selected: {
    backgroundColor: "rgb(54, 48, 98)",
  },
  selectMode: {
    marginLeft: 25,
  },
});
