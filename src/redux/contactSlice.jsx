import { createSlice } from "@reduxjs/toolkit";


const contactsState = {
    items: []
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsState,
    reducers: {
      add(state, action) {
        const doubleContact =
          state.items.findIndex(contact => contact.name === action.payload.name) === -1;
  
        if (doubleContact) {
          state.items.push(action.payload); // додавання нового контакту
        } else {
          alert(`${action.payload.name} is already in contacts.`);
        }
      },
      remove(state, action) {
        // визначення індексу контакту у переліку контактів
        const idxContact = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(idxContact, 1); // видалення контакту по id
      },
    },
  });
  
export default contactsSlice

  export const { add, remove } = contactsSlice.actions;