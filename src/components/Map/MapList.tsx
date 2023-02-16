import React, { useEffect, useState } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

type map = {
  key:number;
  mapNum: string;
  mapLocation1: number;
  mapLocation2: number;
  mapLocationName: string;
};

const MapList = () => {
  const [exampleList, setExampleList] = useState([
    {
      key:1,
      mapNum: "map1",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:2,
      mapNum: "map2",
      mapLocation1: 37.557,
      mapLocation2: 126.8518,
      mapLocationName: "서울 강서구 화곡로61길 10 대한장어빌딩",
    },
    {
      key:3,
      mapNum: "map3",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:4,
      mapNum: "map4",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:5,
      mapNum: "map5",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:6,
      mapNum: "map6",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:7,
      mapNum: "map7",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      key:8,
      mapNum: "map8",
      mapLocation1: 37.566826,
      mapLocation2: 126.9786567,
      mapLocationName: "서울특별시 중구 세종대로 110 서울특별시청",
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
      {exampleList.map((list:map)=>
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
  min-width: 800px;
  height: 32vh;
  border: 1px solid red;
  margin-top: -40px;
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
