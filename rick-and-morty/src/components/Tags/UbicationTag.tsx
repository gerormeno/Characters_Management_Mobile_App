import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type UbicationTagProps = {
  ubication: string;
};

export const UbicationTag: React.FC<UbicationTagProps> = ({ ubication }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="map-marker" size={18} color="#CCCCCC" />
      <Text style={styles.label}>{ubication}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignSelf: "flex-start",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#967D31",
    margin: 3,
  },
  label: {
    color: "#CCCCCC",
    marginLeft:4,

  },
});
