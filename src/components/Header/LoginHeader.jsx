import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const navigate = useNavigate();

  return (
    <LoginHeaderBox>
      <LoginHeaderTitle
        onClick={() => {
          navigate("/");
        }}
      >
        OTT TOP FIVE
      </LoginHeaderTitle>
    </LoginHeaderBox>
  );
};

const LoginHeaderBox = styled.div`
  background-color: #141414;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 80px #141414;
  z-index: 2;
`;
const LoginHeaderTitle = styled.div`
  font-size: 50px;
  color: #e50914;
  font-weight: bold;
  cursor: pointer;
`;

export default LoginHeader;
