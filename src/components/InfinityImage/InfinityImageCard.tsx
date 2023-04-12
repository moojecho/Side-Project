import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import {useIntersectionObserver} from "../../hooks/index";
import * as allTypes from "./type";

const InfinityImageCard = ({ mapList }: { mapList: allTypes.mapInfo[] }) => {
  const imageRef =  useRef<HTMLDivElement>(null)
  const [imageList, setImageList] = useState<allTypes.mapInfo[]>(
    mapList?.slice(0, 50)
  );
  const entry = useIntersectionObserver(imageRef,{});

  useEffect(() => {
    setImageList(mapList?.slice(0, 3));
  }, [mapList]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setImageList((prevImageList) => {
        const newImageList = [...prevImageList, ...mapList.slice(prevImageList.length, prevImageList.length + 1)];
        return newImageList;
      });
    }
  }, [entry, mapList]);
  
  console.log(imageList);
  
  return (
    <ImageCardLayout ref={imageRef}><ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={'https://www.animals.or.kr/api/files/thumbnails/39900-ea04b035-6c67-42f4-94fc-c2331dd144c8.jpg'} />
      <ImageCard src={
"https://cdn.kidshankook.kr/news/photo/202302/6148_17335_2630.jpg"} />
      {imageList?.map((list) => {
        return <ImageCard key={list._id} src={list.image} />;
      })}
    </ImageCardLayout>
  );
};

const ImageCardLayout = styled.div`
  width: 960px;
  max-height: 660px;
  min-height: 300px;
  margin: auto;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: 480px) {
    width: 350px;
    min-height: 450px;
  }
`

const ImageCard = styled.img`
  max-width: 200px;
  height: 150px;
  border: "";
  border-radius: 2px;
  box-shadow: 0 0px 3px 0.5px gray;
  margin: 10px 15px 0 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 110px;
    font-size: 18px;
    margin: 10px 0px 0px 18px;
  }
`;

export default InfinityImageCard;
