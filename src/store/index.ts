import { configureStore } from '@reduxjs/toolkit';

//Slices
import timerManagerReducer from '../components/timer-manager/slice';
import settingsManagerReducer from '../components/settings-manager/slice';
import alertModalReducer from 'components/alert-modal/slice';

export const store = configureStore({
  reducer: {
    alertModal: alertModalReducer,
    settingsManager: settingsManagerReducer,
    timerManager: timerManagerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
