import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/users/signup`, credentials);
      token.set(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/users/login`, credentials);
      token.set(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/users/logout`);
      token.unset();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  },
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refreshCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Not logged');
    }

    token.set(persistedToken);
    try {
      const res = await axios.get(`${BASIC_URL}/users/current`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  },
);

