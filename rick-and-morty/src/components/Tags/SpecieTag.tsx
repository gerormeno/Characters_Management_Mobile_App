import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

type SpecieTagProps = {
  specie: string;
};

export const SpecieTag: React.FC<SpecieTagProps> = ({ specie }) => {
  return (
    <View style={styles.container}>
      <Entypo name="baidu" size={18} color="#CCCCCC" />
      <Text style={styles.label}>{specie}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignSelf: "flex-start",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#674EA7",
    margin:3,
  },
  label: {
    color:"#CCCCCC",
    marginLeft:4,
  },
});
