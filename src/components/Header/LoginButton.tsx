import React from "react";
import styled from "styled-components";

const LoginButton = () => {
  
  
    return <LoginButtonLayout>
      <LoginBtn>
        로그인
      </LoginBtn>
      
    </LoginButtonLayout>;
};

const LoginButtonLayout = styled.div`
  width: 62px;
  height: 37px;
`;

const LoginBtn = styled.button`
width: 60px;
  height: 35px;
  margin-right: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default LoginButton;
