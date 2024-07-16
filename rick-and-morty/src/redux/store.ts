import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/characters.slice";
import customCharactersReducer from "./slices/customCharacters.slice";
// ...

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    customCharacters: customCharactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
