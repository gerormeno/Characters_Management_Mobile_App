import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

type AgeTagProps = {
  age: string;
};

export const AgeTag: React.FC<AgeTagProps> = ({ age }) => {
  return (
    <View style={styles.container}>
      <Entypo name="back-in-time" size={18} color="#CCCCCC" />
      <Text style={styles.label}>{age}</Text>
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
    margin: 3,
  },
  label: {
    color: "#CCCCCC",
    marginLeft:4,
  },
});
