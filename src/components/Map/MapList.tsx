import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import * as allTypes from './type';

declare global {
  interface Window {
    kakao: any;
  }
}

type currentSlide = {
  currentSlide:number
}

const MapList = () => {
  const example = useSelector((state: any) => state.catLoctionMap);

  const TOTAL_SLIDES: allTypes.TotalSlides = example.length;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLInputElement>(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES-4) {
      setTimeout(() => setCurrentSlide(0), 0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setTimeout(() => setCurrentSlide(TOTAL_SLIDES-4), 0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };


//카카오 맵 api-------------------------------------------------------------

  useEffect(() => {
    example.map((list: any) => {
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
      <CarouselLeftButton  onClick={PrevSlide}>{"<"}</CarouselLeftButton>
      <SlideLayout currentSlide={currentSlide} ref={slideRef}>
        {example.map((list: any) => (
          <MapCard key={list.key}>
            <CatPosition id={list.mapNum} />
            <PositionInformation>{list.mapLocationName}</PositionInformation>
          </MapCard>
        ))}
      </SlideLayout>
      <CarouselRightButton onClick={NextSlide}>{">"}</CarouselRightButton>
    </MapListLayout>
  );
};

const MapListLayout = styled.div`
  width: 960px;
  height: 32vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
`;

const SlideLayout = styled.div<currentSlide>`
  display: flex;
  overflow: hidden;
  transition: all 0.7s ease-in-out;
  transform:${props=>`translateX(-${props.currentSlide*230}px)`};
`;

const MapCard = styled.div`
  min-width: 180px;
  height: 30vh;
  background-color: #dbdbdb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px auto 45px;
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

const CarouselLeftButton = styled.button`
  width: 20px;
  height: 60px;
  margin: auto -15px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #626262;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 5px;
  background-color: dbdbdb;
  z-index: 5;
  cursor: pointer;
`;
const CarouselRightButton = styled.button`
  width: 20px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #626262;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 5px;
  background-color: dbdbdb;
  cursor: pointer;
`;

export default MapList;
