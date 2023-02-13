import React, { useEffect, useState } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

type map = {
  mapNum: string;
  mapLocation1: number;
  mapLocation2: number;
  mapLocationName: string;
};

const MapList = () => {
  const [exampleList, setExampleList] = useState([
    {
      mapNum: "map1",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "",
    },
    {
      mapNum: "map2",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
    },
    {
      mapNum: "map3",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
    },
    {
      mapNum: "map4",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
    },
    {
      mapNum: "map5",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
    },
    {
      mapNum: "map6",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
    },
  ]);

  useEffect(() => {
    exampleList.map((list) => {
      const container = document.getElementById(`${list.mapNum}`);
      const option = {
        center: new window.kakao.maps.LatLng(
          list.mapLocation1,
          list.mapLocation2
        ),
        level: 5,
      };
      const map = new window.kakao.maps.Map(container, option);
    });
  }, []);

  return (
    <MapListLayout>
      <MapCard>
        <CatPosition id="map1" />
        <PositionInformation>{`서울특별시 중구 세종대로 110 서울특별시청`}</PositionInformation>
      </MapCard>
      <MapCard>
        <CatPosition id="map2" />
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map3" />
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map4" />
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map5" />
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map6" />
        <PositionInformation />
      </MapCard>
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
  background-color: #dbdbdb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const CatPosition = styled.div`
  width: 160px;
  height: 22vh;
  margin-bottom: 10px;
`;

const PositionInformation = styled.div`
  width: 160px;
  height: 5vh;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
`;

export default MapList;
