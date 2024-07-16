import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../images/rick_and_morty_logo.png";

export const LandingScreen = () => {
  const { container, body, logoIcon, title } = styles;

  return (
    <View style={container}>
      <View style={body}>
        <Image source={Logo} style={logoIcon} />
        <Text style={title}>Rick & Morty App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(67, 85, 133)",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    margin: 15,
  },
});
