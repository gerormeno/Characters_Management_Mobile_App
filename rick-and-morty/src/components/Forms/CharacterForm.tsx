import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { TypeCustomCharacter } from "../../types/customCharacter.type";
import { useAppDispatch } from "../../redux/hooks";
import {
  addCharacter,
  updateCharacter,
} from "../../redux/slices/customCharacters.slice";
import { ImageAvatarPicker } from "./ImageAvatarPicker";
import uuid from "react-native-uuid";
import { defaultProfileAvatar } from "../../images/default_avatar_base64";
import { CustomInput } from "./CustomInput";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { CustomOptions } from "./CustomOptions";

const INITIAL_FORM_STATE: TypeCustomCharacter = {
  id: "",
  name: "",
  age: "",
  gender: "",
  origin: "",
  status: "",
  image: `data:image/png;base64,${defaultProfileAvatar}`,
};

type CharacterFormProps = {
  initialFormState: TypeCustomCharacter;
  action: "CREATE" | "EDIT";
};

export const CharacterForm = ({
  initialFormState,
  action,
}: CharacterFormProps) => {
  const [formState, setFormState] = useState<TypeCustomCharacter>(initialFormState);
  const [errors, setErrors] = useState(INITIAL_FORM_STATE);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!formState.name) {
      handleError("Ingrese el nombre del personaje", "name");
      valid = false;
    }
    if (!formState.age) {
      handleError("Ingrese la edad del personaje", "age");
      valid = false;
    } else if (isNaN(Number(formState.age))) {
      handleError("Solo se pueden ingresar numeros", "age");
      valid = false;
    }
    if (!formState.gender) {
      handleError("Seleccione el genero del personaje", "gender");
      valid = false;
    }
    if (!formState.origin) {
      console.log(formState.origin);
      handleError("Ingrese el origen del personaje", "origin");
      valid = false;
    }
    if (!formState.status) {
      handleError("Seleccione el estado del personaje", "status");
      valid = false;
    }
    if (valid) {
      action == "CREATE" ? createCharacter() : modifyCharacter();
    }
  };

  const handleError = (errorMessage: string, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const handleChange = (text: string, input: string) => {
    setFormState((prevState) => ({ ...prevState, [input]: text }));
  };

  const createCharacter = () => {
    dispatch(addCharacter({ ...formState, id: uuid.v4().toString() }));
    setFormState(INITIAL_FORM_STATE);
    navigation.navigate("Listado");
  };

  const modifyCharacter = () => {
    dispatch(updateCharacter({ ...formState }));
    navigation.navigate("Detalles", { character: formState });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageAvatarPicker
          image={formState.image}
          setImage={(image) => handleChange(image, "image")}
        />
      </View>
      <CustomInput
        label="Nombre"
        error={errors.name}
        initialValue={initialFormState.name}
        onChange={(text) => handleChange(text, "name")}
        onFocus={() => {
          handleError("", "name");
        }}
      />
      <CustomInput
        numericInput
        label="Edad"
        error={errors.age}
        initialValue={initialFormState.age}
        onChange={(text) => handleChange(text, "age")}
        onFocus={() => {
          handleError("", "age");
        }}
      />
      <CustomOptions
        handleChange={(option) => handleChange(option, "gender")}
        options={["Masculino", "Femenino", "Desconocido"]}
        label="Genero"
        error={errors.gender}
        initialValue={formState.gender}
      />
      <CustomInput
        label="Origen"
        error={errors.origin}
        onChange={(text) => handleChange(text, "origin")}
        onFocus={() => {
          handleError("", "origin");
        }}
        initialValue={initialFormState.origin}
      />
      <CustomOptions
        handleChange={(option) => handleChange(option, "status")}
        options={["Vivo", "Muerto", "Desconocido"]}
        label="Estado"
        error={errors.status}
        initialValue={formState.status}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={validate}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonTitle}>
          {`${action === "CREATE" ? "Crear" : "Modificar"} Personaje`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  imageContainer: {
    padding: 10,
  },
  buttonsContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  createButton: {
    height: 55,
    width: "100%",
    backgroundColor: "rgb(54, 48, 98)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
