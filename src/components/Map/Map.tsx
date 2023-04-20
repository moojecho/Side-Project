import * as React from "react";
import styled from "styled-components";

import { MapHeader, MapList, AddMapButton } from "./index";

const Map = () => {
  return (
    <MapLayout>
      <AddMapButton />
      <MapHeader />
      <MapList />
    </MapLayout>
  );
};

const MapLayout = styled.div`
  width: 99.9vw;
  height: 70vh;
  min-height: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 760px;
  }
  @media only screen and (max-width: 480px) {
    height: 410px;
    min-height: 400px;
  }
`;

export default Map;
