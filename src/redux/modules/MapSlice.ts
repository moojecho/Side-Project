import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import * as allTypes from "../../components/Map/type";
export type map = {
  mapList: 
    {
      _id?:string;
      key: number;
      mapNum: string;
      mapLocation1: number;
      mapLocation2: number;
      mapLocationName: string;
      distance?:string;
    }[]
};
const initialState: map = {
  mapList: [],
};

export const __sendMapInfo = createAsyncThunk(
  "MAPINFO",
  async (payload: allTypes.MapInformation, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:3001/catMap`, payload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __receiveMapInfo = createAsyncThunk(
  "GETMAPINFO",
  async (payload, thunkAPI) => {
    const { data } = await axios.get(`http://localhost:3001/catMap`);
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const MapSlice = createSlice({
  name: "catLoctionMap",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__receiveMapInfo.fulfilled, (state, action) => {
      console.log(action.payload)
      state.mapList = action.payload;
    });
  }
});
export const {} = MapSlice.actions;
export default MapSlice.reducer;
