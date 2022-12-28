import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../shared/api";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  LikeOutlined,
  LikeFilled,
  DislikeFilled,
  DislikeOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";

import {
  toggleEditCheck,
  __addComment,
  __removeComment,
  __saveComment,
} from "../../redux/modules/CommentSlice";

const EditButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieid = useParams();
  const [comments, setComments] = useState([]);
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState(data);
  const [findToken, setFindToken] = useState(null);
  const inputRef = useRef(0);

  const getDatas = async () => {
    await api
      .get(`/api/movie/${movieid.id}`)
      .then((res) => setData(res.data.data.comments));
    await api
      .get(`/api/movie/${movieid.id}`)
      .then((res) => setComments(res.data.data));
  };

  useEffect(() => {
    const authorization = localStorage.getItem("authorization");
    setFindToken(authorization);
    getDatas();
  }, []);

  useEffect(() => {
    const editCheck = data.map((list) => {
      return {
        ...list,
        editCheck: false,
        accessToken: findToken,
        dislikes: 0,
        likes: 0,
        dislikeCheck: false,
      };
    });
    setAddData(editCheck);
  }, [data]);

  const addButton = (inputRef) => {
    if (findToken == null) {
      window.alert("로그인 후 이용해주세요");
      navigate("/login");
    } else {
      if (inputRef.current.value === "") {
        window.alert("댓글을 입력해주세요!");
      } else {
        dispatch(
          __addComment({
            id: comments.id,
            content: inputRef.current.value,
          })
        );
      window.location.reload();
      }
    }
  };

  const toggleDone = (list) => {
    const editCheck = addData.map((data) =>
      data.id === list.id ? { ...data, editCheck: !data.editCheck } : data
    );
    setAddData(editCheck);
    dispatch(toggleEditCheck(list));
  };

  const toggleLike = (list) => {
    const state = addData.map((comment) => {
      return comment.id === list.id
        ? comment.editCheck === true
          ? comment
          : comment.dislikes === 1
          ? {
              ...comment,
              dislikeCheck: !list.dislikeCheck,
              dislikes: --comment.dislikes,
              editCheck: !list.editCheck,
              likes: ++comment.likes,
            }
          : {
              ...comment,
              editCheck: !comment.editCheck,
              likes: ++comment.likes,
            }
        : comment;
    });
    setAddData(state);
  };

  const toggleDisLike = (list) => {
    const state = addData.map((comment) => {
      return comment.id === list.id
        ? comment.dislikeCheck === true
          ? comment
          : comment.likes === 1
          ? {
              ...comment,
              dislikeCheck: !list.dislikeCheck,
              dislikes: ++comment.dislikes,
              editCheck: !list.editCheck,
              likes: --comment.likes,
            }
          : {
              ...comment,
              dislikeCheck: !list.dislikeCheck,
              dislikes: ++comment.dislikes,
            }
        : comment;
    });
    setAddData(state);
  };

  const save_Remove = (list, inputRef) => {
    if (list.editCheck === true) {
      const editCheck = addData.map((data) =>
        data.id === list.id
          ? {
              ...data,
              content: inputRef.current.value,
              editCheck: !data.editCheck,
            }
          : data
      );
      setAddData(editCheck);
      dispatch(__saveComment({ ...list, content: inputRef.current.value }));
    } else {
      if (window.confirm("정말 삭제합니까?") === true) {
        const editCheck = addData.filter((data) => data.id !== list.id);
        setAddData(editCheck);
        dispatch(__removeComment(list));
      } else {
        return null;
      }
    }
  };

  return (
    <CommentsLayout>
      <div style={{ flexDirection: "row" }}>
        <AddCommentInput ref={inputRef} placeholder={"댓글을 추가해보세요!"} />
        <PlusSquareOutlined
          onClick={() => addButton(inputRef)}
          style={{ fontSize: "30px", float: "right", marginRight: "20px" }}
        />
      </div>
      <p style={{ fontSize: "25px", marginLeft: "20px" }}>댓글</p>
      {addData.map((list) => (
        <Comment key={list.id}>
          <CommentContent>
            <div style={{ fontSize: "11px" }}>{list.user.nickName}</div>
            <div
              style={{ marginTop: "5px", fontSize: "15px", fontWeight: "bold" }}
            >
              {list.accessToken !== null ? (
                list.editCheck ? (
                  <ToggleInput ref={inputRef} />
                ) : (
                  list.content
                )
              ) : (
                list.content
              )}
            </div>
          </CommentContent>
          {list.accessToken != null ? (
            <div>
              <Button onClick={() => toggleDone(list)}>
                {list.editCheck ? "취소" : "수정"}
              </Button>
              <Button onClick={() => save_Remove(list, inputRef)}>
                {list.editCheck ? "저장" : "삭제"}
              </Button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <LikeCheck>
                {list.editCheck ? (
                  <LikeFilled
                    style={{ fontSize: "25px" }}
                    onClick={() => toggleLike({ list })}
                  />
                ) : (
                  <LikeOutlined
                    style={{ fontSize: "25px" }}
                    onClick={() => toggleLike(list)}
                  />
                )}
                {list.likes}
              </LikeCheck>
              <LikeCheck>
                {list.dislikeCheck ? (
                  <DislikeFilled
                    style={{ fontSize: "25px" }}
                    onClick={() => toggleDisLike(list)}
                  />
                ) : (
                  <DislikeOutlined
                    style={{ fontSize: "25px" }}
                    onClick={() => toggleDisLike(list)}
                  />
                )}
                {list.dislikes}
              </LikeCheck>
            </div>
          )}
        </Comment>
      ))}
    </CommentsLayout>
  );
};

export default EditButton;

const CommentsLayout = styled.div`
  width: 735px;
  height: 600px;
  background-color: #292929;
  border: none;
  border-radius: 7px;
  margin: auto;
  margin-bottom: 10px;
`;

const AddCommentInput = styled.input`
  width: 500px;
  height: 30px;
  color: white;
  font-weight: bold;
  background-color: black;
  border-radius: 6px;
  border: 1px solid white;
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const Comment = styled.div`
  width: 700px;
  height: 60px;
  border: none;
  background-color: #686868;
  color: white;
  border-radius: 7px;
  margin: auto;
  margin-top: 10px;
  padding: 7px;
  text-align: left;
  display: flex;
  flex-direction: row;
  box-shadow: 0.5px 0.5px white;
`;

const ToggleInput = styled.input`
  width: 400px;
  height: 30px;
  color: white;
  opacity: 0.8;
  background-color: black;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: -5px;
`;

const CommentContent = styled.div`
  width: 590px;
  margin: 2px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 8px;
  align-items: center;
  border: none;
  border-radius: 7px;
  &:hover {
    transform: scale(1.1);
  }
`;

const LikeCheck = styled.div`
  width: 33px;
  height: 40px;
  size: 0px;
  margin-left: 8px;
  margin-top: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.1);
  }
`;
