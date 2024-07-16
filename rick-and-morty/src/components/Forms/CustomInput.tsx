import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type CustomInputProps = {
  label: string;
  error: string;
  onFocus: () => void;
  numericInput?: boolean;
  onChange: (input: string) => void;
  initialValue: string;
};

export const CustomInput = ({
  label,
  error,
  onFocus,
  numericInput,
  onChange,
  initialValue,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? "red" : isFocused ? "blue" : "light" },
        ]}
      >
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          keyboardType={numericInput ? "numeric" : "default"}
          onChangeText={onChange}
          defaultValue={initialValue}
                  />
      </View>
      {error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    height: 55,
    backgroundColor: "rgb(129, 143, 180)",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
    alignItems: "center",
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "white",
  },
  input: {
    flex: 1,
  },
  errorLabel: {
    color: "red",
    fontSize: 15,
  },
});
