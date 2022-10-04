import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContacts, deleteContacts, updateContacts } from './contactsOperations';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
  console.log('rejected');
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

    //update
    [updateContacts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [updateContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      console.log('fulfilled');
      state.item = state.item.map((contact) => (contact.id === action.payload.id ? action.payload : contact));
    },
    [updateContacts.rejected]: setError,
  },
});

export const { filterItem } = contactsSlice.actions;
export default contactsSlice.reducer;
