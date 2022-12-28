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

export const __addComment = createAsyncThunk("ADD_COMMENT", async (payload, thunkAPI) => {
  console.log(payload.id)
   const sendContent ={content:payload.content};
  const { data } = await api.post(`api/auth/comment?movieId=${payload.id}`, sendContent);
  return thunkAPI.fulfillWithValue(data);
});

//${payload.id} {content:payload.content}
export const __removeComment = createAsyncThunk(
  "REMOVE_COMMENT",
  async (payload, thunkAPI) => {
    const res = await api.delete(
      `/api/auth/comment/${payload.id}`
    );
    return thunkAPI.fulfillWithValue(res);
  }
);

export const __saveComment = createAsyncThunk(
  "SAVE_COMMENT",
  async (payload, thunkAPI) => {
    const sendContent ={content:payload.content};
    const res = await api.put(
      `/api/auth/comment/${payload.id}`,sendContent
    );
    return thunkAPI.fulfillWithValue(res);
  }
);


export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comment = state.comment.concat(action.payload);
    },
    removeComment: (state, action) => {
      state.comment = state.comment.filter((list)=> list.id !== action.payload.id);
    },
    saveComment: (state, action) => {
      state.comment = state.comment.map((list)=> list.id === action.payload.id ? {...list,comment:action.payload.comment, editCheck:false } :list);
    },
    toggleEditCheck: (state, action) => {
      state.comment = state.comment.map((comment) => {
        return comment.id === action.payload.id
          ? { ...comment, editCheck: !action.payload.editCheck }
          : comment;
      });
    },
    toggleLikeData: (state, action) => {
      state.comment = state.comment.map((comment) => {
        return comment.id === action.payload.id
          ? comment.editCheck === true
            ? comment.likes>1? 
                {...comment,
                  likes: --comment.likes} : 
                {...comment,
                  editCheck: !action.payload.editCheck,
                  likes: --comment.likes}
              
            : {
                ...comment,
                editCheck: !action.payload.editCheck,
                likes: ++comment.likes,
              }
          : comment;
      });
    },
    toggleDistLikeData: (state, action) => {
      state.comment = state.comment.map((comment) => {
        return comment.id === action.payload.id
          ? comment.dislikeCheck === true
            ? comment.dislikes>1? 
                {...comment,
                  dislikes: --comment.dislikes} : 
                {...comment,
                  dislikeCheck: !action.payload.dislikeCheck,
                  dislikes: --comment.dislikes}
              
            : {
                ...comment,
                dislikeCheck: !action.payload.dislikeCheck,
                dislikes: ++comment.dislikes,
              }
          : comment;
      });
    }
  },

  extraReducers: {
    [__getCommentList.fulfilled]: (state, action) => {
      state.comment = [action.payload.data.comments[0]];
    },

    [__addComment.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.comment.push(action.payload);
    },
    [__removeComment.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.comment = state.comment.filter((list)=> list.id !== action.payload.id);
    },
    [__saveComment.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.comment = state.comment.map((list)=> list.id === action.payload.id ? {...list,comment:action.payload.comment, editCheck:false } :list);
    },
    [__saveComment.rejected]: (state, action) => {
      console.log(action.payload)
    },
  },
});
export const { toggleEditCheck, toggleLikeData,toggleDistLikeData,removeComment,saveComment, } = CommentSlice.actions;
export default CommentSlice.reducer;
