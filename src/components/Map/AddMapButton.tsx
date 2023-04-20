import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeMapToggle } from "../../redux/modules/ModalSlice";

const AddMapButton = () => {
  const dispatch = useDispatch();
  const addMapToggle: boolean = useSelector(
    (state: any) => state.modal.addMapModal.toggle
  );

  const changeToggle = (MapToggle: boolean) => {
    dispatch(changeMapToggle(MapToggle));
  };

  return (
    <AddMapButtonLayout>
      <AddButton onClick={() => changeToggle(addMapToggle)}>
        길냥이 위치 추가하기😻
      </AddButton>
    </AddMapButtonLayout>
  );
};

const AddMapButtonLayout = styled.div`
  height: 20vh;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 560px;
  }
  @media only screen and (max-width: 480px) {
    height: 50px;
    margin: 5px auto 5px auto;
  }
`;
const AddButton = styled.button`
  width: 35vw;
  /* min-width: 400px; */
  height: 6vh;
  min-height: 50px;
  font-size: 150%;
  box-shadow: 0 0px 3px 0.5px gray;
  color: #ff9500;
  border: none;
  border-radius: 40px;
  margin: auto;
  font-family: NotoSanskr-Bold;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    min-width: 330px;
  }
  @media only screen and (max-width: 480px) {
    width: 250px;
    min-width: 200px;
    min-height: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export default AddMapButton;
