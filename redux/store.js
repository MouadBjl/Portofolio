import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/authSlice';
import testimonialReducer from './slices/testimonialSlice';

// Configure redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'testimonials'] // Only persist these reducers
};

const rootReducer = combineReducers({
    auth: authReducer,
    testimonials: testimonialReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);