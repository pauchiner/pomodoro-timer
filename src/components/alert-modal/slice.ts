import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  currentModalId: string;
  isOpen: boolean;
}

const initialState: State = {
  currentModalId: 'none',
  isOpen: false,
};

export const alertModalReducer = createSlice({
  name: 'alertModal',
  initialState,
  reducers: {
    setCurrentModalId: (state, action: PayloadAction<string>) => {
      state.currentModalId = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setCurrentModalId, setIsOpen } = alertModalReducer.actions;
export default alertModalReducer.reducer;
