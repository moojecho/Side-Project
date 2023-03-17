import * as React from "react";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";

import {changeMapToggle} from '../../redux/modules/ModalSlice';


const AddMapButton = () => {
    const dispatch =  useDispatch();
  const addMapToggle:boolean = useSelector((state:any) => state.modal.addMapModal.toggle)
 
  const changeToggle = (MapToggle:boolean) => {
    dispatch(changeMapToggle(MapToggle));
  }
  return (
    <AddMapButtonLayout>
        <AddButton onClick={()=>changeToggle(addMapToggle)}>길냥이 위치 추가하기😻</AddButton>
    </AddMapButtonLayout>
  );
};

const AddMapButtonLayout = styled.div`
  height: 11vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    height: 50px;
  }
`
const AddButton = styled.button`
  width: 35vw;
  /* min-width: 400px; */
  height: 6vh;
  font-size: 150%;
  box-shadow: 0 0px 3px 0.5px gray;
  color:#e45f0e;
  border: none;
  border-radius: 40px;
  margin: auto;
  font-family: NotoSanskr-Bold;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    width: 250px;
    font-size: 18px;
  }
`;

export default AddMapButton;
