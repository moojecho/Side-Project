import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __signup } from "../../redux/modules/signupSlice";

//회원가입 form 컴포넌트
export default function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 보낼 데이터 상태관리
  const [signData, setsignData] = useState({
    email: "",
    nickName: "",
    password: "",
    passwordConfirm: "",
  });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setsignData({ ...signData, [id]: value });
  };

  // 회원가입 이벤트
  const submitLogin = async (e) => {
    e.preventDefault();

    // 회원가입 성공시 로그인 페이지 이동
    const checkState = await dispatch(__signup(signData));
    if (checkState.payload) {
      navigate("/login");
      //비밀번호 확인이 다를 경우
    } else if (signData.passwordConfirm !== signData.password) {
      alert("입력하신 비밀번호가 다릅니다.");
    } else {
      alert("이미 사용중인 닉네임입니다.");
    }
  };

  return (
    <SignUpLayoutBox>
      <SignUpDiv onSubmit={submitLogin}>
        <SignUpTitle>Sign Up</SignUpTitle>

        <SignUpSubTitle>이메일</SignUpSubTitle>
        <SignUpInput
          type="email"
          id="email"
          onChange={changeInput}
          required
          placeholder={"이메일 형식에 맞게 입력해주세요."}
        ></SignUpInput>

        <SignUpSubTitle>닉네임</SignUpSubTitle>
        <SignUpInput
          type="text"
          id="nickName"
          onChange={changeInput}
          required
          maxLength={6}
          placeholder={"최대 6자리까지 입력해주세요"}
        ></SignUpInput>

        <SignUpSubTitle>비밀번호</SignUpSubTitle>
        <SignUpInput
          type="password"
          id="password"
          onChange={changeInput}
          required
          minLength={4}
          placeholder={"4자리 이상 입력해주세요"}
        ></SignUpInput>

        <SignUpSubTitle>비밀번호 확인</SignUpSubTitle>
        <SignUpInput
          id="passwordConfirm"
          type="password"
          onChange={changeInput}
          required
          minLength={4}
          placeholder={"비밀번호를 다시 입력해주세요"}
        ></SignUpInput>

        <SignUpButton>가입하기</SignUpButton>
        <Loginhr />
        <LoginSignUpButton
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </LoginSignUpButton>
      </SignUpDiv>
    </SignUpLayoutBox>
  );
}

const SignUpLayoutBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;
const SignUpDiv = styled.form`
  width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SignUpTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto 30px;
  color: #141414;
`;
const SignUpSubTitle = styled.div`
  display: flex;
  margin-left: 50px;
  color: #141414;
`;
const SignUpInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px auto;
  padding: 0 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
    color: #a5a5a5;
  }
`;

const SignUpButton = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
  margin: 30px auto 0 auto;
  &:hover {
    background: #141414;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    font-weight: bold;
  }
`;
const Loginhr = styled.div`
  width: 100%;
  margin: 50px 0 30px 0;
  border-bottom: 1px solid #999;
`;

const LoginSignUpButton = styled.button`
  border: none;
  background: none;
  width: 300px;
  height: 50px;
  margin: auto;
  cursor: pointer;
  &:hover {
    background: #141414;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    font-weight: bold;
  }
`;
