import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  lapsesToLongBreak: number;
  longBreakTime: number;
  pomodoroTime: number;
  breakTime: number;
}

const initialState: State = {
  lapsesToLongBreak: 4,
  longBreakTime: 900,
  pomodoroTime: 1500,
  breakTime: 300,
};

export const SettingsManagerSlice = createSlice({
  name: 'settingsManager',
  initialState,
  reducers: {
    setLapsesToLongBreak: (state, action: PayloadAction<number>) => {
      state.lapsesToLongBreak = action.payload;
    },
    setLongBreakTime: (state, action: PayloadAction<number>) => {
      state.longBreakTime = action.payload;
    },
    setPomodoroTime: (state, action: PayloadAction<number>) => {
      state.pomodoroTime = action.payload;
    },
    setBreakTime: (state, action: PayloadAction<number>) => {
      state.breakTime = action.payload;
    },
  },
});

export const {
  setLapsesToLongBreak,
  setPomodoroTime,
  setLongBreakTime,
  setBreakTime,
} = SettingsManagerSlice.actions;

export default SettingsManagerSlice.reducer;
