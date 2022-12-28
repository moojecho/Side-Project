import * as React from "react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as allTypes from './type';

const Carousel = () => {
  const TOTAL_SLIDES : allTypes.TotalSlides = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setCurrentSlide(0), 1000);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setCurrentSlide(TOTAL_SLIDES), 1000);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if(slideRef.current)
    if (currentSlide === -1 || currentSlide === TOTAL_SLIDES+1) {
      slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
    } else {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
      if (currentSlide === -1) {
        slideRef.current.style.transform = `translateX(100vw)`;
      }
    }
  }, [currentSlide]);

  return (
    <CarouselLayout>
      <CarouselLeftButton onClick={() => PrevSlide()}>{"<"}</CarouselLeftButton>
      <SlideLayout ref={slideRef}>
        <CarouselImage style={{ background: "orange" }} />
        <CarouselImage />
        <CarouselImage style={{ background: "black" }} />
        <CarouselImage style={{ background: "orange" }} />
        {currentSlide > TOTAL_SLIDES ? <CarouselImage /> : null}
      </SlideLayout>
      <CarouselRightButton onClick={() => NextSlide()}>
        {">"}
      </CarouselRightButton>
    </CarouselLayout>
  );
};

const CarouselLayout = styled.div`
  width: 100vw;
  height: 44vh;
  display: flex;
  align-items: center;
`;

const SlideLayout = styled.div`
  display: flex;
`;

const CarouselImage = styled.img`
  // 슬라이드 1페이지에서 뒤로 가려 했을때 보여질 복제 슬라이드를 위한 x조정
  translate: -100vw;
  width: 100vw;
  height: 43vh;
  background-color: green;
  background-size: contain;
  flex: none;
`;

const CarouselLeftButton = styled.button`
  width: 30px;
  height: 30px;
  left: 2vw;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  position: absolute;
  z-index: 5;
  cursor: pointer;
`;
const CarouselRightButton = styled.button`
  width: 30px;
  height: 30px;
  right: 2vw;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  position: absolute;
  z-index: 5;
  cursor: pointer;
`;

export default Carousel;
