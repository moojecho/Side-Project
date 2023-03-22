import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {useGeolocation,useGetDistance} from "../../hooks/index";
import { __receiveMapInfo } from "../../redux/modules/MapSlice";
import * as allTypes from "./type";

const MapList = () => {
  const dispatch = useAppDispatch();
  const userLocation = useGeolocation();
  const example: allTypes.mapInfo = useAppSelector(
    (state: any) => state.catLoctionMap.mapList
  );
    console.log(userLocation);
  const TOTAL_SLIDES: allTypes.TotalSlides = example.length;
  const [mapList, setMapList] = useState<allTypes.mapInfo>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slidesLength = () => {
    if (TOTAL_SLIDES === 1) {
      return `10px 0px auto 400px`;
    } else if (TOTAL_SLIDES === 2) {
      return `10px 0px auto 150px`;
    } else if (TOTAL_SLIDES === 3) {
      return `10px 0px auto 75px`;
    } else {
      return `10px 0px auto 45px`;
    }
  };

  //다음 슬라이드 버튼-------------------------------------------------------
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES - 4) {
      setTimeout(() => setCurrentSlide(0), 0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  //이전 슬라이드 버튼-------------------------------------------------------
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setTimeout(() => setCurrentSlide(TOTAL_SLIDES - 4), 0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  //카카오 맵 api-------------------------------------------------------------

  useEffect(() => {
    example.map((list) => {
      const container = document.getElementById(`${list.mapNum}`);
      const option = {
        center: new window.kakao.maps.LatLng(
          list.mapLocation1,
          list.mapLocation2
        ),
        level: 5,
      };
      const map = new window.kakao.maps.Map(container, option);
      
      // 마커--------------------------------------------------------------

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
  }, [example]);

  useEffect(() => {
    dispatch(__receiveMapInfo());
  }, []);

  return (
    <MapListLayout>
      <CarouselLeftButton onClick={PrevSlide}>{"<"}</CarouselLeftButton>
      <SlideLayout>
        <Slide currentSlide={currentSlide}>
          {example.map((list) => {
            return (
              <MapCard key={list._id} marginChange={slidesLength()}>
                <CatPosition id={list.mapNum} />
                <PositionInformation>{list.catLocation}</PositionInformation>
              </MapCard>
            );
          })}
        </Slide>
      </SlideLayout>
      <CarouselRightButton onClick={NextSlide}>{">"}</CarouselRightButton>
    </MapListLayout>
  );
};

const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapListLayout = styled(CenterLayout)`
  width: 960px;
  height: 32vh;
  flex-direction: row;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 495px;
  }
  @media only screen and (max-width: 480px) {
    width: 360px;
    height: 250px;
  }
`;

const SlideLayout = styled.div`
  overflow: hidden;
  margin: auto;
`;

const Slide = styled.div<allTypes.currentSlide>`
  display: flex;
  transition: all 0.7s ease-in-out;
  transform: ${(props) => `translateX(-${props.currentSlide * 230}px)`};
  @media only screen and (max-width: 480px) {
    transform: ${(props) => `translateX(-${props.currentSlide * 161}px)`};
  }
`;

const MapCard = styled(CenterLayout)<{ marginChange: string }>`
  width: 180px;
  height: 30vh;
  background-color: #dbdbdb;
  border-radius: 10px;
  flex-direction: column;
  margin: ${(props) => props.marginChange};
  @media only screen and (min-width: 1200px) {
    min-width: 180px;
  }
  @media only screen and (max-width: 480px) {
    width: 130px;
    height: 200px;
    margin: 0 0 0 31px;
  }
`;

const CatPosition = styled.div`
  width: 160px;
  height: 22vh;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    width: 120px;
    height: 150px;
    margin-top: -8px;
  }
`;

const PositionInformation = styled.div`
  width: 160px;
  height: 5vh;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  @media only screen and (max-width: 480px) {
    width: 130px;
    height: 20px;
    font-weight: bold;
    font-size: 8px;
    margin: -5px 0 0 5px;
  }
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
const CarouselRightButton = styled(CarouselLeftButton)`
  margin: auto 0 auto -15px;
`;

export default MapList;
