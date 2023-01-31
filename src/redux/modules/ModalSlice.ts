import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "../../shared/api"

const initialState = {
  comment: [
    // {
    //   id: 0,
    //   accessToken: true,
    //   nickName: "길동이",
    //   content: "저는 어디에도 있고 어디에도 없습니다.",
    //   editCheck: false,
    //   dislikeCheck: false,
    //   likes: 0,
    //   dislike: 0,
    // },
    // {
    //   id: 1,
    //   accessToken: false,
    //   nickName: "발락",
    //   content: "여기가 차붐의 나라입니까..?",
    //   editCheck: false,
    //   dislikeCheck: false,
    //   likes: 0,
    //   dislikes: 0,
    // },
    // {
    //   id: 2,
    //   accessToken: false,
    //   nickName: "예수그리스도",
    //   content: '"AMEN"',
    //   editCheck: false,
    //   dislikeCheck: false,
    //   likes: 0,
    //   dislikes: 0,
    // },
  ],
};

export const __getCommentList = createAsyncThunk(
  "GET_COMMENT_LIST",
  async (payload, thunkAPI) => {
    const { data } = await api.get(
      `api/movie/1`
    );
    return thunkAPI.fulfillWithValue(data);
  }
);


export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comment = state.comment.concat(action.payload);
    },
  },

  extraReducers: {
    
  },
});
export const { addComment } = CommentSlice.actions;
export default CommentSlice.reducer;
