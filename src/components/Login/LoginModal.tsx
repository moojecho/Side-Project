import React from "react";
import styled from "styled-components";

const LoginModal = () => {
  return (
    <ModalLayout>
      <Div></Div>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

const Div = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`;

export default LoginModal;
