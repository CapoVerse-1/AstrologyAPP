import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import astrologerReducer from './slices/astrologerSlice';
import chatReducer from './slices/chatSlice';
import callReducer from './slices/callSlice';
import horoscopeReducer from './slices/horoscopeSlice';
import panchangReducer from './slices/panchangSlice';
import transactionReducer from './slices/transactionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    astrologer: astrologerReducer,
    chat: chatReducer,
    call: callReducer,
    horoscope: horoscopeReducer,
    panchang: panchangReducer,
    transaction: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store; 