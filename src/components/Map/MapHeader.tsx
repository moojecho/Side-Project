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
  width: 78vw;
  height: 5vh;
`;

const MapTitle = styled.h2`
  margin: 0px 5px;
`;

export default MapHeader;
