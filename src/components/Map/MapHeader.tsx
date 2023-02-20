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
`;

const MapTitle = styled.h2`
  margin: 15px 0 0 20px;
`;

export default MapHeader;
