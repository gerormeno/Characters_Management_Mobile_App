import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CharacterCardCollection } from "../components/Cards/CharacterCardCollection";
import { setCharacters } from "../redux/slices/characters.slice";
import { characters } from "../api/characters";
import { useAppDispatch } from "../redux/hooks";
import { Paginator } from "../components/Pagination/Paginator";

export const CharactersScreen = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    characters.getAll({ page }).then((res) => {
      dispatch(setCharacters(res.data.results));
      setPagesCount(res.data.info.pages);
    });
  }, [page]);

  return (
    <View style={styles.container}>
      <CharacterCardCollection />
      <Paginator
        currentPage={page}
        handleChangePage={setPage}
        totalPages={pagesCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(67, 85, 133)",
  },
});
