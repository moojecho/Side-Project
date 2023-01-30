import React from 'react';
import styled from "styled-components";
import SignIn from '../components/Login/SignIn';


const LoginPage = () => {
  return (
    <LoginPageBox>
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