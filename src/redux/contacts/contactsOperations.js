import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL = 'https://connections-api.herokuapp.com';

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
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/contacts`, { name, number });
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
      await axios.delete(`${BASIC_URL}/contacts/${id}`);
      return { id };
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t delete contact, server Error!');
    }
  },
);

export const updateContacts = createAsyncThunk(
  'update/updateContacts',
  async (payload, thunkAPI) => {
    try {
      const { id, ...data } = payload;
      await axios.patch(`${BASIC_URL}/contacts/${id}`, data);
      return { ...payload };
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t update contact, server Error!');
    }
  },
);

