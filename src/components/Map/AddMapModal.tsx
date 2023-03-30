import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import * as allTypes from "./type";
import { __sendMapInfo } from "../../redux/modules/MapSlice";
import { changeMapToggle } from "../../redux/modules/ModalSlice";
import { current } from "@reduxjs/toolkit";

const AddMapModal = () => {
  const korean = /^[\sㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  const none = /[\s+]/;
  const regNum = /[0-9]/;
  const dispatch = useAppDispatch();

  const [daumMapApiToggle, setDaumMapApiToggle] = useState<boolean>(false);

  const [mapInformation, setMapInformation] = useState<allTypes.MapInformation>(
    { catImage: "", catNum: 0, catLocation: "" }
  );

  const cancleLoginModal = (toggle: boolean) => {
    dispatch(changeMapToggle(toggle));
  };

  const sendMapInfo = () => {
    dispatch(__sendMapInfo(mapInformation));
    dispatch(changeMapToggle(true));
  };

  const daumMapModel = {
    onOffMapApiModal: () => {
      setDaumMapApiToggle((current) => !current);
    },
    selectAddress: (data: any) => {
      setMapInformation({ ...mapInformation, catLocation: data.address });
      setDaumMapApiToggle(false);
    },
  };

  return (
    <ModalLayout>
      <ModalBackGround onClick={() => cancleLoginModal(true)} />
      <Modal>
        <CancleLayout>
          <CancleButton onClick={() => cancleLoginModal(true)}>✖</CancleButton>
        </CancleLayout>
        <ImageLayout>이미지 첨부</ImageLayout>
        <InputLayout>
          길냥이 마릿수
          <CatInput
            type="number"
            value={mapInformation.catNum}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              regNum.test(e.target.value) || e.target.value.search(none)
                ? setMapInformation({
                    ...mapInformation,
                    catNum: Number(e.target.value),
                  })
                : window.alert("숫자만 사용해주세요!")
            }
          />
        </InputLayout>
        <InputLayout>
          주소
          <CatInput
            value={mapInformation.catLocation}
            onClick={daumMapModel.onOffMapApiModal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMapInformation({
                ...mapInformation,
                catLocation: e.target.value,
              })
            }
          />
        </InputLayout>
        <AddButton onClick={sendMapInfo}>추가</AddButton>
      </Modal>
      {daumMapApiToggle ? (
        <DaumMapApiModal>
          <DaumMapApiModalHeader>
            <CancleMapApiModal onClick={daumMapModel.onOffMapApiModal}>✖</CancleMapApiModal>
          </DaumMapApiModalHeader>
          <DaumPostcode onComplete={daumMapModel.selectAddress} />
        </DaumMapApiModal>
      ) : null}
    </ModalLayout>
  );
};

// korean.test(e.target.value) || none.test(e.target.value)
//                 ? setMapInformation({
//                     ...mapInformation,
//                     catLocation: e.target.value,
//                   })
//                 : window.alert("한글만 사용해주세요!")
const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalLayout = styled(CenterLayout)`
  width: 100vw;
  height: 100vh;
`;

const ModalBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
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
  background-color: white;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 10px black;

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 400px;
  }
`;

const CancleLayout = styled.div`
  width: 460px;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: right;
  @media only screen and (max-width: 480px) {
    width: 265px;
    height: 30px;
    margin-top: 5px;
  }
`;

const CancleButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const ImageLayout = styled(CenterLayout)`
  width: 250px;
  height: 200px;
  border: 1px solid black;
  margin: auto;
  margin-top: -20px;
`;

const InputLayout = styled.div`
  width: 250px;
  height: 60px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: -45px;
  @media only screen and (max-width: 480px) {
    width: 230px;
    height: 60px;
    margin-top: -15px;
    font-size: 15px;
  }
`;

const CatInput = styled.input`
  width: 240px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid gray;
  border-radius: 10px;
  margin: 5px 0px;
  @media only screen and (max-width: 480px) {
    width: 220px;
    height: 25px;
  }
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
  font-weight: bold;
  margin: auto;
  margin-top: -45px;
  @media only screen and (max-width: 480px) {
    width: 230px;
    height: 25px;
    margin-top: -10px;
  }
  cursor: pointer;
`;

const DaumMapApiModal = styled(Modal)`
  width: 450px;
  height: 460px;
`;
const DaumMapApiModalHeader = styled(CenterLayout)`
  width: 450px;
  height: 40px;
  justify-content: right;
`;
const CancleMapApiModal = styled(CenterLayout)`
  width: 60px;
  cursor: pointer;
`;
export default AddMapModal;
