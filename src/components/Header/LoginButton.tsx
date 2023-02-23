import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { changeToggle } from "../../redux/modules/ModalSlice";

const LoginButton = () => {
  const dispatch = useDispatch();

  const loginToggle: boolean = useSelector(
    (state: any) => state.modal.loginModal.toggle
  );

  const loginModalOn = (toggle: boolean) => {
    dispatch(changeToggle(toggle));
  };

  return (
    <LoginButtonLayout onClick={() => loginModalOn(loginToggle)}>
      로그인
    </LoginButtonLayout>
  );
};

const LoginButtonLayout = styled.button`
  width: 60px;
  height: 35px;
  margin-right: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 45px;
    height: 30px;
    font-size: 10px;
    border-radius: 7px;
  }
  cursor: pointer;
`;

export default LoginButton;
