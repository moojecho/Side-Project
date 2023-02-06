import * as React from "react";
import styled from "styled-components";

const Map = () => {
 
  return (
    <MapHeaderLayout>
        <MapTitle>위치</MapTitle>
    </MapHeaderLayout>
  );
};

const MapHeaderLayout = styled.div`
width: 78vw;
`

const MapTitle = styled.h2`
    margin: 25px 16px;
`;

export default Map;
