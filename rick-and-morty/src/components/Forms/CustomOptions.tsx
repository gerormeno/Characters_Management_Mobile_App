import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type CustomOptionsProps = {
  handleChange: (text: string) => void;
  options: string[];
  label: string;
  error: string;
  initialValue: string;
};

export const CustomOptions = ({
  options,
  handleChange,
  label,
  error,
  initialValue,
}: CustomOptionsProps) => {
  const [selected, setSelected] = useState(initialValue);

  const isSelected = (option:string) => {
    return option === selected;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.optionButton, isSelected(option) && styles.selected]}
            onPress={() => {handleChange(option); setSelected(option)}}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {!selected && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  optionButton: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: "rgb(54, 48, 98)",
    height: 55,
    borderRadius: 25,
    opacity: 0.4,
  },
  selected: {
    opacity: 0.95,
  },
  optionText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "white",
  },
  errorLabel: {
    color: "red",
    fontSize: 15,
  },
});
