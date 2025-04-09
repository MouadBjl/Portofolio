import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    users: [], // Store registered users
    error: null,
    registrationSuccess: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            const { email } = action.payload;

            // Make sure users array exists
            if (!state.users) {
                state.users = [];
            }

            const userExists = state.users.some(user => user && user.email === email);

            if (userExists) {
                state.error = 'User with this email already exists';
                state.registrationSuccess = false;
            } else {
                state.users.push(action.payload);
                state.error = null;
                state.registrationSuccess = true;
            }
        },
        login: (state, action) => {
            const { email, password } = action.payload;

            // Make sure users array exists
            if (!state.users) {
                state.users = [];
                state.error = 'Invalid email or password';
                return;
            }

            const user = state.users.find(
                user => user && user.email === email && user.password === password
            );

            if (user) {
                state.isAuthenticated = true;
                state.user = user;
                state.error = null;
            } else {
                state.error = 'Invalid email or password';
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
            state.registrationSuccess = false;
        },
    },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;