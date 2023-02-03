import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {changeToggle} from '../../redux/modules/ModalSlice';

const LoginButton = () => {
  const dispatch = useDispatch();
  
  const loginToggle:boolean = useSelector((state:any) => state.modal.loginModal.toggle)
  
  const loginModalOn = (toggle:boolean) =>{
    dispatch(changeToggle(toggle));
  }
  
    return <LoginButtonLayout>
      <LoginBtn onClick={()=>loginModalOn(loginToggle)}> 
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
