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
    }[]
  // 이렇게 타입 설정하면 틀린 문법으로 나옴 위처럼 적용해야함
  //   mapList:[ 
  //   {
  //     key: number;
  //     mapNum: string;
  //     mapLocation1: number;
  //     mapLocation2: number;
  //     mapLocationName: string;
  //   }
  // ]

};
const initialState: map = {
  mapList: [
    {
      key: 1,
      mapNum: "map1",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key: 2,
      mapNum: "map2",
      mapLocation1: 37.557,
      mapLocation2: 126.8518,
      mapLocationName: "서울 강서구 화곡로61길 10 대한장어빌딩",
    },
    {
      key: 3,
      mapNum: "map3",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key: 4,
      mapNum: "map4",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key: 5,
      mapNum: "map5",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key: 6,
      mapNum: "map6",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key: 7,
      mapNum: "map7",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
  ],
};

export const __sendMapInfo = createAsyncThunk(
  "MAPINFO",
  async (payload: allTypes.MapInformation, thunkAPI) => {
    console.log(payload);
    const { data } = await axios.post(`http://localhost:3001/catMap`, payload);
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const __receiveMapInfo = createAsyncThunk(
  "GETMAPINFO",
  async (payload, thunkAPI) => {
    const { data } = await axios.get(`http://localhost:3001/catMap`);
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
