import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,       // state.user
    counter: counterReducer, // state.counter
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;