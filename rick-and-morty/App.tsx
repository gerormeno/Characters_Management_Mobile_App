import React from "react";
import { LandingScreen } from "./src/screens/LandingScreen";
import { CharactersScreen } from "./src/screens/CharactersScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { CreateCharacterScreen } from "./src/screens/CreateCharacterScreen";
import { CustomCharactersScreen } from "./src/screens/CustomCharactersScreen";
import { ProfileCustomCharacterScreen } from "./src/screens/ProfileCustomCharacterScreen";
import { TypeCustomCharacter } from "./src/types/customCharacter.type";
import { EditCharacterScreen } from "./src/screens/EditCharacterScreen";

export type RootStackParamList = {
  Home: undefined;
  Todos: undefined;
  Perfil: { characterId: string | undefined };
  Crear: undefined;
  Listado: undefined;
  Detalles: { character: TypeCustomCharacter };
  Modificar: { character: TypeCustomCharacter };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const CharactersScreensStack = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerStyle: { backgroundColor: "rgb(129, 143, 180)" },
      headerTitleStyle: { color: "white", fontSize: 20 },
    })}
  >
    <Stack.Screen name="Todos" component={CharactersScreen} />
    <Stack.Screen
      name="Perfil"
      component={ProfileScreen}
      initialParams={undefined}
    />
  </Stack.Navigator>
);

const CustomCharactersStack = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerStyle: { backgroundColor: "rgb(129, 143, 180)" },
      headerTitleStyle: { color: "white", fontSize: 20 },
    })}
  >
    <Stack.Screen name="Listado" component={CustomCharactersScreen} />
    <Stack.Screen name="Crear" component={CreateCharacterScreen} />
    <Stack.Screen name="Detalles" component={ProfileCustomCharacterScreen} />
    <Stack.Screen
      name="Modificar"
      component={EditCharacterScreen}
      initialParams={undefined}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "Home";

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Personajes") {
                iconName = focused ? "people" : "people-outline";
              } else if (route.name === "Mis Personajes") {
                iconName = focused ? "people" : "people-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "purple",
            tabBarInactiveTintColor: "white",
            tabBarStyle: { backgroundColor: "rgb(54, 48, 98)" },
            tabBarLabelStyle: { fontSize: 15, color: "white" },
            headerStyle: { backgroundColor: "rgb(54, 48, 98)" },
            headerTitleStyle: { color: "white", fontSize: 25 },
          })}
        >
          <Tab.Screen name="Home" component={LandingScreen} />
          <Tab.Screen name="Personajes" component={CharactersScreensStack} />
          <Tab.Screen name="Mis Personajes" component={CustomCharactersStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
