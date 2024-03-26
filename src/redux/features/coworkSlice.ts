// coWorkSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const coWorkSlice = createSlice({
  name: 'coWork',
  initialState: {
    nameco: '',
    address: '',
    telco: '',
    opentime: '',
    closetime: '',
    priceco: '',
  },
  reducers: {
    setCoWorkData: (state, action) => {
      state.nameco = action.payload.nameco;
      state.address = action.payload.address;
      state.telco = action.payload.telco;
      state.opentime = action.payload.opentime;
      state.closetime = action.payload.closetime;
      state.priceco = action.payload.priceco;
    },
  },
});

export const { setCoWorkData } = coWorkSlice.actions;

export default coWorkSlice;
