import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Carousel } from "./index";

const Banner = () => {

  return (
    <BannerLayout >
      <Carousel />
    </BannerLayout>
  );
};

const BannerLayout = styled.div`
  width: 100vw;
  height: 40vh;
  margin-top: 50px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    height: 18vh;
    min-height: 150px;
  }
`;

export default Banner;
