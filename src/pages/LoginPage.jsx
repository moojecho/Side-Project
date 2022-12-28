import React from 'react';
import styled from "styled-components";
import LoginHeader from '../components/Header/LoginHeader';
import SignIn from '../components/Login/SignIn';


const LoginPage = () => {
  return (
    <LoginPageBox>
      <LoginHeader />
      <SignIn/>
    </LoginPageBox>
  );
};

const LoginPageBox = styled.div`
  width:100%;
  height:100%;
  display: flex;
`

export default LoginPage;