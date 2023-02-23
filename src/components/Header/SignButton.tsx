import React from "react";
import styled from "styled-components";

const SignButton = () => {
  return (
    <SignButtonLayout>회원가입
    </SignButtonLayout>
  );
};

const SignButtonLayout = styled.div`
  width: 70px;
  height: 35px;
  color: white;
  background-color: #e4750e;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 45px;
    height: 30px;
    font-size: 9px;
    border-radius: 7px;
    margin-left: -7px;
  }
  cursor: pointer;
`;

export default SignButton;
