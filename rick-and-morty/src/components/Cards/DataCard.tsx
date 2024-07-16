import { View, Text, StyleSheet } from "react-native";

type DataCardProps = {
  name: string;
  data: any;
};

export const DataCard = ({ name, data }: DataCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.dataText}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgb(129, 143, 180)",
    margin: 5,
    padding: 10,
    alignItems: "flex-start",
    borderRadius: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dataText: {
    fontSize: 20,
  },
});
