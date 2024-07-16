import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { defaultProfileAvatar } from "../../images/default_avatar_base64";

type ImageAvatarPickerProps = {
  image: string;
  setImage: (image: string) => void;
};

export const ImageAvatarPicker = ({
  image,
  setImage,
}: ImageAvatarPickerProps) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(`data:image/png;base64,${result.assets[0].base64}`);
    } else {
      setImage(`data:image/png;base64,${defaultProfileAvatar}`);
    }
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.button}
        onPress={pickImage}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonTitle}>SELECCIONAR UNA IMAGEN DE LA GALERIA</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
  },
  button: {
    height: 55,
    width: "100%",
    backgroundColor: "rgb(54, 48, 98)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
