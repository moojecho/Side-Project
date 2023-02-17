import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type LoginState = {
  loginModal: 
    {
      toggle: boolean;
    }
    addMapModal: 
    {
      toggle: boolean;
    }
};

const initialState: LoginState = {
  loginModal: { toggle: false },
  addMapModal: { toggle: false },
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeToggle: (state, action: PayloadAction<boolean>) => {
      state.loginModal = {...state.loginModal,toggle:!action.payload};
    },
    changeMapToggle: (state, action: PayloadAction<boolean>) => {
      state.addMapModal = {...state.addMapModal,toggle:!action.payload};
      console.log(state.addMapModal.toggle);
    },
  },

  extraReducers: {},

});
export const { changeToggle,changeMapToggle } = ModalSlice.actions;
export default ModalSlice.reducer;
