import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isRefreshCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //register
    [register.pending]: (state) => {
      state.error = null;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //login
    [login.pending]: (state) => {
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //logOut
    [logOut.pending]: (state) => {
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogged = false;
    },
    [logOut.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //refreshCurrentUser
    [refreshCurrentUser.pending](state) {
      state.isRefreshCurrentUser = true;
      state.error = null;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshCurrentUser = false;
      state.isLogged = true;
    },
    [refreshCurrentUser.rejected](state, action) {
      state.isRefreshCurrentUser = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
