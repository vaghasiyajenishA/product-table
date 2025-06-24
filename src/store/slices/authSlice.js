import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  initialized: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.error = null
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.isAuthenticated = false
      state.user = null
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
      state.loading = false
    },
    clearError: (state) => {
      state.error = null
    },
    initializeAuth: (state) => {
      const userData = localStorage.getItem("currentUser")
      const token = localStorage.getItem("authToken")
      if (userData && token) {
        state.user = JSON.parse(userData)
        state.isAuthenticated = true
      }
      state.initialized = true
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, clearError, initializeAuth } = authSlice.actions

export default authSlice.reducer
