import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    isAuthenticated: false,
    error: null,
    message: null,
    isUpdated: false,
  },
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    logoutSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.message = action.payload;
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    loadUserRequest(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    loadUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loadUserFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    updatePasswordRequest(state) {
      state.loading = true;
      state.isUpdated = false;
      state.message = null;
      state.error = null;
    },
    updatePasswordSuccess(state, action) {
      state.loading = false;
      state.isUpdated = true;
      state.message = action.payload;
      state.error = null;
    },
    updatePasswordFailed(state, action) {
      state.loading = false;
      state.isUpdated = false;
      state.message = null;
      state.error = action.payload;
    },
    updateProfileRequest(state) {
      state.loading = true;
      state.isUpdated = false;
      state.message = null;
      state.error = null;
    },
    updateProfileSuccess(state, action) {
      state.loading = false;
      state.isUpdated = true;
      state.message = action.payload;
      state.error = null;
    },
    updateProfileFailed(state, action) {
      state.loading = false;
      state.isUpdated = false;
      state.message = null;
      state.error = action.payload;
    },
    updateProfileResetAfterUpdate(state) {
      state.error = null;
      state.isUpdated = false;
      state.message = null;
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailed,
  loadUserRequest,
  loadUserSuccess,
  loadUserFailed,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailed,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailed,
  updateProfileResetAfterUpdate,
  clearAllErrors,
  logoutSuccess,
  logoutFailed,
} = userSlice.actions;

export default userSlice.reducer;