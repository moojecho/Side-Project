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
  width: 960px;
  height: 50px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 760px;
  }
  @media only screen and (max-width: 480px) {
    width: 350px;
    height: 30px;
    margin: -10px 0 -10px 0;
  }
`;

const MapTitle = styled.p`
  width: 500px;
  height: 50px;
  font-size: 25px;
  margin: 0px 0 0px 50px;
  font-family: NotoSanskr;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    width: 360px;
    height: 40px;
    font-size: 18px;
    margin: 0px 0 0px 30px;
  }
`;

export default MapHeader;
