import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface PaginatorProps {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

export const Paginator = ({
  totalPages,
  currentPage,
  handleChangePage,
}: PaginatorProps) => {
  const isOnFirstPage = currentPage === 1;
  const isOnLastPage = currentPage === totalPages;

  const handlePrevPress = () => {
    if (!isOnFirstPage) {
      handleChangePage(currentPage - 1);
    }
  };

  const handleNextPress = () => {
    if (!isOnLastPage) {
      handleChangePage(currentPage + 1);
    }
  };

  const handleFirstPress = () => {
    if (!isOnFirstPage) {
      handleChangePage(1);
    }
  };

  const handleLastPress = () => {
    if (!isOnLastPage) {
      handleChangePage(totalPages);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, isOnFirstPage && styles.disabled]}
        onPress={handleFirstPress}
      >
        <MaterialCommunityIcons name="step-backward-2" size={30} color="#CCC" />
      </Pressable>
      <Pressable
        style={[styles.btn, isOnFirstPage && styles.disabled]}
        onPress={handlePrevPress}
      >
        <MaterialCommunityIcons name="step-backward" size={30} color="#CCC" />
      </Pressable>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{currentPage}</Text>
      </View>
      <Pressable
        style={[styles.btn, isOnLastPage && styles.disabled]}
        onPress={handleNextPress}
      >
        <MaterialCommunityIcons name="step-forward" size={30} color="#CCC" />
      </Pressable>
      <Pressable
        style={[styles.btn, isOnLastPage && styles.disabled]}
        onPress={handleLastPress}
      >
        <MaterialCommunityIcons name="step-forward-2" size={30} color="#CCC" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  btn: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    minWidth: 50,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "rgb(54, 48, 98)",
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.3,
  },
  btnText: {
    color: "#CCC",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});
