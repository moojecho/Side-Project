import React from "react";
import styled from "styled-components";

const LoginButton = () => {
  
  
    return <Login_Button>
      로그인
    </Login_Button>;
};

const Login_Button = styled.div`
  width: 60px;
  height: 35px;
  margin-right: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default LoginButton;
