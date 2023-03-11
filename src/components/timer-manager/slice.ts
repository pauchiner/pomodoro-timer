import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { timerState, timerType } from './types';
import { store } from '../../store';

interface State {
  timeLeft: number;
  state: timerState;
  type: timerType;
  lapse: number;
}

const initialState: State = {
  timeLeft: 1500,
  state: 'idle',
  type: 'work',
  lapse: 1,
};

export const TimerManagerSlice = createSlice({
  name: 'timerManager',
  initialState,
  reducers: {
    setTimeLeft: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
    setLapse: (state, action: PayloadAction<number>) => {
      state.lapse = action.payload;
    },
    setState: (state, action: PayloadAction<timerState>) => {
      state.state = action.payload;
    },
    setType: (state, action: PayloadAction<timerType>) => {
      state.type = action.payload;
    },
    resetTimer: (state) => {
      state.state = 'idle';
      state.type = 'work';
      state.lapse = 1;
      state.timeLeft = store.getState().settingsManager.pomodoroTime;
    },
  },
});

export const { setTimeLeft, setLapse, setState, setType, resetTimer } =
  TimerManagerSlice.actions;
export default TimerManagerSlice.reducer;
