import React from "react";
import styled from "styled-components";

const SignButton = () => {
  return (
    <SignButtonLayout>
      <SignBtn>회원가입</SignBtn>
    </SignButtonLayout>
  );
};

const SignButtonLayout = styled.div`
  width: 72px;
  height: 37px;
`;

const SignBtn = styled.button`
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
