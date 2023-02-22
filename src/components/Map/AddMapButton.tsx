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
`
const AddButton = styled.button`
  width: 30vw;
  min-width: 400px;
  height: 6vh;
  font-size: 150%;
  box-shadow: 0 2px 5px gray;
  border: 2px solid #e45f0e;
  border-radius: 20px;
  background-color: #e4750e;
  margin: auto;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`;

export default AddMapButton;
