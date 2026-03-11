// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './slice/RegisterSlice';
import loginReducer from './slice/LoginSlice';
import logoutReducer from './slice/Logout';

export const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer,

    },
})
