import * as React from "react";
import styled from "styled-components";

const MapList = () => {
  return (
    <MapListLayout>
      <MapCard/>
      <MapCard/>
      <MapCard/>
      <MapCard/>
      <MapCard/>
    </MapListLayout>
  );
};

const MapListLayout = styled.div`
  width: 80vw;
  height: 40vh;
  margin-top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapCard = styled.div`
  min-width: 180px;
  width: 10vw;
  height: 30vh;
  border: 1px solid gray;
  border-radius: 10px;
  margin: auto;
`;

export default MapList;
