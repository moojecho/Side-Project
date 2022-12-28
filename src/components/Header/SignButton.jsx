import React from "react";
import styled from "styled-components";

const SignButton = () => {
  
  
    return <Sign_Button>회원가입</Sign_Button>;
};

const Sign_Button = styled.div`
  width: 70px;
  height: 35px;
  color: white;
  background-color: orange;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default SignButton;
