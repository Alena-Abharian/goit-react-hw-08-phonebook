import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContacts, deleteContacts } from './contactsOperations';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    item: [],
    filter: '',
    status: null,
    error: null,
  },
  reducers: {
    filterItem: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    //fetchContacts
    [fetchContacts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.item = action.payload;
    },
    [fetchContacts.rejected]: setError,

    //addNewContacts
    [addNewContacts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [addNewContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      const isContactExist = state.item.find(({ name }) => name.toLowerCase() === action.payload.name.toLowerCase());
      if (isContactExist) {
        return alert(`${action.payload.name} is already in contacts.`);
      }
      state.item.push(action.payload);
    },
    [addNewContacts.rejected]: setError,

    //deleteContacts
    [deleteContacts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.item = state.item.filter(contact => contact.id !== action.payload.id);
    },
    [deleteContacts.rejected]: setError,
  },
});

export const { filterItem } = contactsSlice.actions;
export default contactsSlice.reducer;
