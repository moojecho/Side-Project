import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { banner1, banner3, banner5 } from "../../static/index";

const TOTAL_SLIDES: number = 2;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [prevSlideNum, setPrevSlideNum] = useState<number>(0);
  const [slideMoveToggle, setSlideMoveToggle] = useState<boolean>(true);
  const slideRef = useRef<HTMLInputElement>(null);

  // const NextSlide = () => {
  //   if (slideMoveToggle) {
  //     setSlideMoveToggle(false);
  //     if (currentSlide === TOTAL_SLIDES) {
  //       setPrevSlideNum(currentSlide);
  //       setCurrentSlide(currentSlide + 1);
  //       setTimeout(() => {
  //         setCurrentSlide(0);
  //         setSlideMoveToggle(true);
  //       }, 300);
  //     } else {
  //       setPrevSlideNum(currentSlide);
  //       setCurrentSlide(currentSlide + 1);
  //       setTimeout(() => setSlideMoveToggle(true), 300);
  //     }
  //   }
  // };

  const NextSlide = () => {
    if (slideMoveToggle) {
      setSlideMoveToggle(false);
      setPrevSlideNum(currentSlide);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => {
        if (currentSlide === TOTAL_SLIDES) {
          setCurrentSlide(0);
        }
        setSlideMoveToggle(true);
      }, 300);
    }
  };

  const PrevSlide = () => {
    if (slideMoveToggle) {
      setSlideMoveToggle(false);
      if (currentSlide === 0) {
        setPrevSlideNum(currentSlide);
        setCurrentSlide(currentSlide - 1);
        setTimeout(() => {
          setCurrentSlide(TOTAL_SLIDES);
          setSlideMoveToggle(true);
        }, 300);
      } else {
        setPrevSlideNum(currentSlide);
        setCurrentSlide(currentSlide - 1);
        setTimeout(() => {
          setSlideMoveToggle(true);
        }, 300);
      }
    }
  };

  useEffect(() => {
    if (slideRef.current)
      if (currentSlide === TOTAL_SLIDES + 1) {
        slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
      } else {
        slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
        if (currentSlide === -1) {
          slideRef.current.style.transform = `translateX(100vw)`;
        }
      }
  }, [currentSlide]);

  return (
    <CarouselLayout>
      <SlideLayout
        ref={slideRef}
        currentSlide={currentSlide}
        prevSlideNum={prevSlideNum}
      >
        <CarouselImage src={banner3} />
        <CarouselImage src={banner5} />
        <CarouselImage src={banner1} />
        <CarouselImage src={banner3} />
        {currentSlide > TOTAL_SLIDES ? <CarouselImage src={banner5} /> : null}
      </SlideLayout>
      <CarouselMoveButtonLayout>
        <CarouselPrevButton onClick={() => PrevSlide()}>
          {"<"}
        </CarouselPrevButton>
        <CarouselPrevButton>{"||"}</CarouselPrevButton>
        <CarouselNextButton onClick={() => NextSlide()}>
          {">"}
        </CarouselNextButton>
      </CarouselMoveButtonLayout>
    </CarouselLayout>
  );
};

const CarouselLayout = styled.div`
  width: 100vw;
  height: 40vh;
  min-height: 255px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    height: 18vh;
    min-height: 150px;
  }
`;

const SlideLayout = styled.div<{ currentSlide: number; prevSlideNum: number }>`
  display: flex;
  transition: ${(props) =>
    props.prevSlideNum === 0 || props.prevSlideNum === TOTAL_SLIDES
      ? props.currentSlide === 0 || props.currentSlide === TOTAL_SLIDES
        ? null
        : `all 0.2s ease-in-out`
      : `all 0.2s ease-in-out`};
`;

// 슬라이드 1페이지에서 뒤로 가려 했을때 보여질 복제 슬라이드를 위한 x조정
const CarouselImage = styled.img`
  transform: translateX(-100vw);
  width: 100vw;
  height: 40vh;
  min-height: 255px;
  @media only screen and (max-width: 480px) {
    transform: translateX(-100vw);
    height: 18vh;
    min-height: 150px;
  }
`;

const CarouselPrevButton = styled.button`
  width: 30px;
  height: 30px;
  margin: auto;
  color: gray;
  font-size: 15px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  border-radius: 15px;
  cursor: pointer;
`;
const CarouselNextButton = styled(CarouselPrevButton)``;

const CarouselMoveButtonLayout = styled.div`
  width: 85px;
  height: 40px;
  right: 25%;
  bottom: 7%;
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
`;

export default Carousel;
