import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapList = () => {
  const example = useSelector((state:any)=>state.catLoctionMap);
  
  useEffect(() => {
    example.map((list:any) => {
      const container = document.getElementById(`${list.mapNum}`);
      const option = {
        center: new window.kakao.maps.LatLng(
          list.mapLocation1,
          list.mapLocation2
        ),
        level: 5,
      };
      const map = new window.kakao.maps.Map(container, option);


      // 주소로 좌표 변환--------------------------------------------------------------------
      
      // const geocoder = new window.kakao.maps.services.Geocoder();
      // // 주소로 좌표를 검색합니다..
      // geocoder.addressSearch(`${list.mapLocationName}`, function (result:any, status:any) {
  
      //   // 정상적으로 검색이 완료됐으면 
      //   if (status === window.kakao.maps.services.Status.OK) {
    
      //     var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
    
      //     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      //     map.setCenter(coords);
      //   }
      // })


      // 마커-------------------------------------------------------------
      
      let markerPosition = new window.kakao.maps.LatLng(
        list.mapLocation1,
        list.mapLocation2
      );

      // 마커를 생성
      let marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커를 지도 위에 표시
      marker.setMap(map);
    });
  }, []);

  return (
    <MapListLayout>
      <SlideLayout>
      {example.map((list:any)=>
        (<MapCard key={list.key}>
        <CatPosition id={list.mapNum}/>
        <PositionInformation>{list.mapLocationName}</PositionInformation>
      </MapCard>)
      )}
      </SlideLayout>
    </MapListLayout>
  );
};

const MapListLayout = styled.div`
  width: 70vw;
  min-width: 840px;
  height: 32vh;
`;

const SlideLayout = styled.div`
  display: flex;
  overflow: hidden;
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
  margin: 10px 0px auto 26px;
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
