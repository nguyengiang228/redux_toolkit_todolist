import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPerson } from "../../interfaces/person";

interface UserState {
  persons: IPerson[];
}

const initialState: UserState = {
  persons: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IPerson>) => {
      state.persons = [...state.persons, action.payload];
    },

    updatePersonById: (state, action: PayloadAction<IPerson>) => {
      const { id, name } = action.payload;
      const updatedPerson = state.persons.map((person) => {
        if (person.id === id) {
          return {
            ...person,
            name,
          };
        }
        return person;
      });

      state.persons = updatedPerson;
    },

    deletePersonById: (state, action: PayloadAction<IPerson>) => {
      const { id } = action.payload;
      const deletedPerson = state.persons.filter((person) => person.id !== id);
      state.persons = deletedPerson;
    },

    deleteAll: (state) => {
      state.persons = [];
    },
  },
});

export const { addPerson, updatePersonById, deletePersonById, deleteAll } =
  userSlice.actions;

//xử lý Selector
export const personSelector = (state: RootState) => state.user.persons;
export default userSlice.reducer;
