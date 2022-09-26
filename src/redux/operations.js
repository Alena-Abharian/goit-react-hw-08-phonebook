import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL = 'https://632c37b85568d3cad87ff893.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASIC_URL}/contacts`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  },
);

export const addNewContacts = createAsyncThunk(
  'contacts/addNewContacts',
  async ({ name, phone }, thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/contacts`, { name, phone });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t add new contact, server Error!');
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'delete/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASIC_URL}/contacts/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t delete contact, server Error!');
    }
  },
);
