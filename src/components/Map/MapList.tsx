import React,{useEffect} from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao:any;
  }
}

const MapList = () => {

  useEffect(()=>{
    const container = document.getElementById("map1");
    const option = {
      center:new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level:5
    };
    const map = new window.kakao.maps.Map(container,option);
  },[])

  return (
    <MapListLayout>
      <MapCard>
        <CatPosition id="map1"/>
        <PositionInformation>{`서울특별시 중구 세종대로 110 서울특별시청`}</PositionInformation>
      </MapCard>
      <MapCard>
        <CatPosition id="map2"/>
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map3"/>
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map4"/>
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map5"/>
        <PositionInformation />
      </MapCard>
      <MapCard>
        <CatPosition id="map6"/>
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
