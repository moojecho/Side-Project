import React, { useEffect, useState, useCallback, useMemo } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useGetDistance } from "../../hooks/index";
import { __receiveMapInfo } from "../../redux/modules/MapSlice";
import * as allTypes from "./type";

const MapList = () => {
  const dispatch = useAppDispatch();
  const example: allTypes.mapInfo[] = useAppSelector(
    (state: any) => state.catLoctionMap.mapList
  );
  const getDistance = useGetDistance(example);

  const TOTAL_SLIDES: allTypes.TotalSlides = example.length;
  const [mapList, setMapList] = useState<allTypes.mapInfo[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slideMargin = useMemo(() => {
    if (TOTAL_SLIDES === 1) {
      return `10px 200px auto 200px`;
    } else if (TOTAL_SLIDES === 2) {
      return `10px 75px auto 75px`;
    } else if (TOTAL_SLIDES === 3) {
      return `10px 37.5px auto 37.5px`;
    } else {
      return `10px 39px auto 39px`;
    }
  }, [TOTAL_SLIDES]);

  //슬라이드 버튼-------------------------------------------------------
  const NextSlide = useCallback(() => {
    if (TOTAL_SLIDES > 4) {
      currentSlide >= TOTAL_SLIDES - 4
        ? setTimeout(() => setCurrentSlide(0), 0)
        : setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, TOTAL_SLIDES]);

  const PrevSlide = useCallback(() => {
    if (TOTAL_SLIDES > 4) {
      currentSlide === 0
        ? setTimeout(() => setCurrentSlide(TOTAL_SLIDES - 4), 0)
        : setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide, TOTAL_SLIDES]);

  //카카오 맵 api-------------------------------------------------------------

  useEffect(() => {
    mapList?.map((list) => {
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
  }, [mapList]);

  useEffect(() => {
    dispatch(__receiveMapInfo());
  }, []);

  useEffect(() => {
    setMapList(getDistance);
  }, [getDistance]);

  return (
    <MapListLayout>
      {mapList.length ? (
        <>
          <CarouselLeftButton onClick={PrevSlide}>{"<"}</CarouselLeftButton>
          <SlideLayout>
            <Slide currentSlide={currentSlide}>
              {mapList?.map((list) => {
                return (
                  <MapCard key={list._id} marginChange={slideMargin}>
                    <CatPosition id={list.mapNum} />
                    <PositionInformation>
                      {list.catLocation}
                    </PositionInformation>
                    <DistanceLayout>
                      {`나와의 거리:${list.distance}km`}
                    </DistanceLayout>
                  </MapCard>
                );
              })}
            </Slide>
          </SlideLayout>
          <CarouselRightButton onClick={NextSlide}>{">"}</CarouselRightButton>
        </>
      ) : (
        `반경 3km 이내에 고양이가 없네요...😿\n직접 추가해볼까요?`
      )}
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
  min-height: 300px;
  font-size: 25px;
  flex-direction: row;
  overflow: hidden;
  white-space: pre-wrap;
  text-align: center;
  @media only screen and (max-width: 480px) {
    width: 360px;
    height: 250px;
    font-size: 13px;
    margin-top: 0px;
  }
`;
const SlideLayout = styled.div`
  overflow: hidden;
  margin: auto;
  text-align: left;
`;

const Slide = styled.div<allTypes.currentSlide>`
  display: flex;
  transition: all 0.7s ease-in-out;
  transform: ${(props) => `translateX(-${props.currentSlide * 240}px)`};
  @media only screen and (max-width: 480px) {
    transform: ${(props) => `translateX(-${props.currentSlide * 161}px)`};
  }
`;

const MapCard = styled(CenterLayout)<{ marginChange: string }>`
  width: 180px;
  height: 30vh;
  min-height: 250px;
  background-color: #dbdbdb;
  border-radius: 10px;
  flex-direction: column;
  margin: ${(props) => props.marginChange};
  @media only screen and (max-width: 480px) {
    width: 130px;
    height: 200px;
    margin: 0 0 0 31px;
  }
`;

const CatPosition = styled.div`
  width: 160px;
  height: 22vh;
  border-radius: 10px;
  min-height: 180px;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    width: 120px;
    height: 150px;
    margin-top: -8px;
  }
`;

const PositionInformation = styled.div`
  width: 160px;
  height: 3vh;
  font-size: 12px;
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

const DistanceLayout = styled.div`
  width: 140px;
  height: 2vh;
  margin: 10px 0 0 -15px;
  display: flex;
  float: left;
  font-size: 12px;
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
