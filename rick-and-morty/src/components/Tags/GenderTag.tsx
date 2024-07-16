import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type GenderTagProps = {
  gender: string;
};

export const GenderTag: React.FC<GenderTagProps> = ({ gender }) => {
  function getColorByGender(gender: string) {
    return gender === "Masculino" || gender === "Male"
      ? "#3979B3"
      : gender === "Femenino" || gender === "Female"
      ? "#C27BA0"
      : "#BF9000";
  }

  return (
    <View
      style={[styles.container, { backgroundColor: getColorByGender(gender) }]}
    >
      <MaterialCommunityIcons
        name="gender-male-female"
        size={18}
        color="#CCCCCC"
      />
      <Text style={styles.label}>{gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignSelf: "flex-start",
    padding: 10,
    margin: 3,
    flexDirection: "row",
  },
  label: {
    fontSize: 15,
    color: "#CCCCCC",
    marginLeft:4,

  },
});
