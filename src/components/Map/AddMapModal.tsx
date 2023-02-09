import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { kakaoIcon, githubIcon } from "../../static/index";

import { changeMapToggle } from "../../redux/modules/ModalSlice";

const AddMapModal = () => {
  const dispatch = useDispatch();

  const cancleLoginModal = (toggle: boolean) => {
    dispatch(changeMapToggle(toggle));
  };

  return (
    <ModalLayout>
      <ModalBackGround onClick={() => cancleLoginModal(true)} />
      <Modal>
        <CancleLayout>
          <CancleButton onClick={() => cancleLoginModal(true)}>✖</CancleButton>
        </CancleLayout>
        <InputLayout>
        <CatInput>
        </CatInput>
        </InputLayout>
        <InputLayout>
        <CatInput>
        </CatInput>
        </InputLayout>
     
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
  z-index: 9998;
`;

const Modal = styled.div`
  width: 500px;
  height: 500px;
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
  background-color: blue;
  margin: auto;
  display: flex;
  justify-content: right;
`;

const CancleButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const InputLayout = styled.div`
  width: 250px;
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: -50px;
`;

const CatInput = styled.input`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid gray;
  border-radius: 10px;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export default AddMapModal;
