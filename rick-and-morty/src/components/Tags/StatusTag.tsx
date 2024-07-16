import { View, Text, StyleSheet } from "react-native";

type StatusTagsProps = {
  status: string;
};

export const StatusTag: React.FC<StatusTagsProps> = ({ status }) => {
  function getColorByStatus(status: string) {
    return status === "Vivo" || status === "Alive"
      ? "green"
      : status === "Dead" || status === "Muerto"
      ? "#880A0A"
      : "#BF9000";
  }

  return (
    <View
      style={[styles.container, { backgroundColor: getColorByStatus(status) }]}
    >
      <Text style={styles.label}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignSelf: "flex-start",
    padding: 10,
    margin: 3,
  },
  label: {
    color: "#CCCCCC",
  },
});
