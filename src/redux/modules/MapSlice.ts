import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type map = {
    key:number;
    mapNum: string;
    mapLocation1: number;
    mapLocation2: number;
    mapLocationName: string;
  };
const initialState: map[] = [
    {
      key:1,
      mapNum: "map1",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:2,
      mapNum: "map2",
      mapLocation1: 37.557,
      mapLocation2: 126.8518,
      mapLocationName: "서울 강서구 화곡로61길 10 대한장어빌딩",
    },
    {
      key:3,
      mapNum: "map3",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:4,
      mapNum: "map4",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:5,
      mapNum: "map5",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:6,
      mapNum: "map6",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
  ];

export const MapSlice = createSlice({
  name: "catLoctionMap",
  initialState,
  reducers: {},
  extraReducers: {},

});
export const { } = MapSlice.actions;
export default MapSlice.reducer;
