import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // data 입력 state
  const [loginData, setloginData] = useState({ email: "", password: "" });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = async (e) => {
    // 새로고침 막기
    e.preventDefault();
    // 가입되지 않은 유저 확인
    const loginState = await dispatch();
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    if (loginState.payload) {
      navigate("/");
    }
  };
  return (
    <LoginLayoutBox>
      <LoginBox onSubmit={submitLogin}>
        <LoginTitle>Login</LoginTitle>
        <LoginIdBox>
          <LoginEmailinput
            id="email"
            type="email"
            onChange={changeInput}
            placeholder="이메일"
            required
          ></LoginEmailinput>
        </LoginIdBox>
        <LoginPwBox>
          <LoginPwinput
            id="password"
            type="password"
            onChange={changeInput}
            placeholder="비밀번호"
            required
            minLength={4}
          ></LoginPwinput>
        </LoginPwBox>
        <LoginButton type="submit">로그인</LoginButton>
        {/* <SocialLoginButton
          onClick={() => {
            navigate("/");
          }}
        >
          카카오로그인
        </SocialLoginButton> */}
        <Loginhr />
        <LoginSignUpButton
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </LoginSignUpButton>
      </LoginBox>
    </LoginLayoutBox>
  );
};

const LoginLayoutBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;
const LoginBox = styled.form`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #141414;
`;
const LoginIdBox = styled.div``;

const LoginEmailinput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
    color: #a5a5a5;
  }
`;
const LoginPwBox = styled.div``;
const LoginPwinput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  padding: 0 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
    color: #a5a5a5;
  }
`;

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background: #141414;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    font-weight: bold;
  }
`;
// const SocialLoginButton = styled.button`
//   width: 300px;
//   height: 50px;
//   cursor: pointer;
// `;
const Loginhr = styled.div`
  width: 100%;
  margin: 50px 0 30px 0;
  border-bottom: 1px solid #999;
`;

const LoginSignUpButton = styled.button`
  border: none;
  width: 300px;
  height: 50px;
  background: none;
  cursor: pointer;
  &:hover {
    background: #141414;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    font-weight: bold;
  }
`;

export default SignIn;
