import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Person {
  id: number;
  name: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      if (action.payload.name !== " ") {
        state.persons.push({
          id: state.persons.length,
          name: action.payload.name,
        });
      } else {
        alert(`Vui lòng nhập giá trị`);
      }
    },

    removePerson: (state, action: PayloadAction<{ id: number }>) => {
      const demo = state.persons.filter(
        (person) => person.id !== action.payload.id
      );
      // console.log(demo);
      return {
        persons: [...demo],
      };
    },

    deleteAll: () => {
      return {
        persons: [],
      };
    },
  },
});

export const { addPerson, removePerson, deleteAll } = PersonSlice.actions;
export const personSelector = (state: RootState) => state.person.persons;
export default PersonSlice.reducer;
