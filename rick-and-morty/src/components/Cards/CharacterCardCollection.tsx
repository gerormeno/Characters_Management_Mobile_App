import { Text, Pressable, FlatList, ListRenderItem, View } from "react-native";
import { TypeCharacter } from "../../types/character.type";
import { CharacterCard } from "./CharacterCard";
import { useAppSelector } from "../../redux/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

export const CharacterCardCollection = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<TypeCharacter> = ({ item }) => (
    <Pressable onPress={() => handlePress(item.id.toString())} key={item.id}>
      <CharacterCard
        image={item.image}
        name={item.name}
        species={item.species}
        status={item.status}
        gender={item.gender}
        location={item.location.name}
        origin={item.origin.name}
      />
    </Pressable>
  );

  const allCharacters: TypeCharacter[] = useAppSelector(
    (state) => state.characters.characters
  );

  const handlePress = (id: string) => {
    navigation.navigate("Perfil", { characterId: id });
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
