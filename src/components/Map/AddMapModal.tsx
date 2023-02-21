import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import * as allTypes from "./type";
import { logo } from "../../static/index";
import { changeMapToggle } from "../../redux/modules/ModalSlice";

const AddMapModal = () => {
  const korean =  /^[\sㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  const none = /[\s+]/;
  const regNum = /[0-9]/;
  const dispatch = useDispatch();

  const [example, setExample] = useState<number>(0);
  const [mapInformation, setMapInformation] = useState<allTypes.MapInformation>(
    { catImage: "", catNumber: 0, catLocation: "" }
  );

  const cancleLoginModal = (toggle: boolean) => {
    dispatch(changeMapToggle(toggle));
  };

  return (
    <ModalLayout>
      <ModalBackGround onClick={() => cancleLoginModal(true)} />
      <Modal>
        <CancleLayout>
          <LogoImage src={logo} />
          <CancleButton onClick={() => cancleLoginModal(true)}>✖</CancleButton>
        </CancleLayout>
        <ImageLayout>이미지 첨부</ImageLayout>
        <InputLayout>
          길냥이 마릿수
          <CatInput type='number' value={mapInformation.catNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              regNum.test(e.target.value) ||e.target.value.search(none) 
                ? setMapInformation({
                    ...mapInformation,
                    catNumber:Number(e.target.value),
                  })
                : window.alert("숫자만 사용해주세요!")
            }/>
        </InputLayout>
        <InputLayout>
          주소
          <CatInput
            value={mapInformation.catLocation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              korean.test(e.target.value) || none.test(e.target.value)
                ? setMapInformation({
                    ...mapInformation,
                    catLocation: e.target.value,
                  })
                : window.alert("한글만 사용해주세요!")
            }
          />
        </InputLayout>
        <AddButton>추가</AddButton>
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
  box-shadow: 1px 1px 10px black;
`;

const CancleLayout = styled.div`
  width: 460px;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: right;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 65px;
  margin: auto;
  position: fixed;
  right: 43%;
`;

const CancleButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const ImageLayout = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid black;
  margin: auto;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputLayout = styled.div`
  width: 250px;
  height: 80px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: -40px;
`;

const CatInput = styled.input`
  width: 240px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid gray;
  border-radius: 10px;
  margin: auto 0px;
  cursor: pointer;
  &:focus {
    border: 1px solid;
  }
`;

const AddButton = styled.button`
  width: 300px;
  height: 30px;
  background-color: #e4750e;
  border: 1px solid #e45f0e;
  border-radius: 10px;
  margin: auto;
  margin-top: -45px;
  cursor: pointer;
`;

export default AddMapModal;
