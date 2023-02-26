import * as React from "react";
import styled from "styled-components";

const MapHeader = () => {
  return (
    <MapHeaderLayout>
      <MapTitle>고양이를 만나볼까요?! 🐈</MapTitle>
    </MapHeaderLayout>
  );
};

const MapHeaderLayout = styled.div`
  width: 900px;
  height: 7vh;
  @media only screen and (max-width: 480px) {
    width: 350px;
    height: 30px;
    margin: 10px 0 -10px 0;
  }
`;

const MapTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 15px 0 0 20px;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 0 30px;
  }
`;

export default MapHeader;
