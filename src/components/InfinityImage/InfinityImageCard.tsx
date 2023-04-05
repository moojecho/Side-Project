import React from "react";
import styled from "styled-components";
import * as allTypes from "./type";

const InfinityImageCard = ({ mapList }: { mapList: allTypes.mapInfo[] }) => {
  return (
    <>
      {mapList?.map((list) => {
        return <ImageCard key={list._id} src={list.image} />;
      })}
    </>
  );
};

const ImageCard = styled.img`
  max-width: 200px;
  height: 150px;
  border: "";
  border-radius: 2px;
  box-shadow: 0 0px 3px 0.5px gray;
  margin: 10px 15px 0 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 110px;
    font-size: 18px;
    margin: 10px 0px 0px 18px;
  }
`;

export default InfinityImageCard;
