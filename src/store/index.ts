import { configureStore } from '@reduxjs/toolkit';

//Slices
import timerManagerReducer from '../components/timer-manager/slice';
import settingsManagerReducer from '../components/settings-manager/slice';

export const store = configureStore({
  reducer: {
    timerManager: timerManagerReducer,
    settingsManager: settingsManagerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
