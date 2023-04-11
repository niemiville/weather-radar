import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherReducer from './weatherReducer';

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

// Define the root reducer
const rootReducer = {
  weather: weatherReducer,
};

// Create the store
const store = configureStore({
  reducer: rootReducer
  // Add any middleware or enhancers as needed
});

// Define the type of thunk actions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type AppDispatch = typeof store.dispatch

export default store;
