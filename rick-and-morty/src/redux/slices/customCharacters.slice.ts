import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeCustomCharacter } from "../../types/customCharacter.type";

interface CustomCharactersState {
  customCharacters: TypeCustomCharacter[];
}

const initialState: CustomCharactersState = {
  customCharacters: [],
};

const customCharactersSlice = createSlice({
  name: "customCharacters",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<TypeCustomCharacter>) => {
      state.customCharacters.push(action.payload);
    },
    updateCharacter: (state, action: PayloadAction<TypeCustomCharacter>) => {
      const updatedCharacter = action.payload;
      const index = state.customCharacters.findIndex(
        (character) => character.id === updatedCharacter.id
      );

      if (index !== -1) {
        state.customCharacters[index] = updatedCharacter;
      }
    },
    deleteCharacters: (state, action: PayloadAction<string[]>) => {
      const idsToDelete = action.payload;
      state.customCharacters = state.customCharacters.filter((character) => !idsToDelete.includes(character.id));
    },
  },
});

export const { addCharacter, updateCharacter, deleteCharacters } = customCharactersSlice.actions;
export default customCharactersSlice.reducer;
