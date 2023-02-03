import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {changeToggle} from '../../redux/modules/ModalSlice';

const LoginModal = () => {
  const dispatch = useDispatch();

  const cancleLoginModal = (toggle:boolean) => {
    dispatch(changeToggle(toggle));
  }
  
  return (
    <ModalLayout>
      <ModalBackGround onClick={()=>cancleLoginModal(true)}/>
      <Modal>
        <CancleLayout>
          <CancleButton onClick={()=>cancleLoginModal(true)}>✖</CancleButton>
        </CancleLayout>
        <KakaoButton />
        <GithubButton />
      </Modal>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  position: fixed;
  left: 0%;
  top: 0%;
  background-color: black;
  z-index: 9999;
`;

const Modal = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

const CancleLayout = styled.div`
  width: 255px;
  height: 25px;
  margin-top: 20px;
  margin-bottom: -55px;
  display: flex;
  justify-content: right;
`;

const CancleButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const KakaoButton = styled.button`
  width: 200px;
  height: 65px;
  background-color: #f9e000;
  border: 0.5px solid gray;
  border-radius: 10px;
  margin: auto;
  cursor: pointer;
`;

const GithubButton = styled.button`
  width: 200px;
  height: 65px;
  background-color: #171515;
  border: 0.5px solid gray;
  border-radius: 10px;
  margin: auto;
  margin-top: -50px;
  cursor: pointer;
`;

export default LoginModal;
