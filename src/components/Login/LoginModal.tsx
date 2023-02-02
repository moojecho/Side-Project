import React from "react";
import styled from "styled-components";

const LoginModal = () => {
  return (
    <ModalLayout>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  width: 400px;
  height: 400px;
    background-color: gray;
    border-radius: 20px;
    position: fixed;
left: 50%;
top: 50%;
z-index: 9999;

-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`;


export default LoginModal;
