import * as React from "react";
import styled from "styled-components";
import {Carousel} from "./index"

const Banner = () => {
 
  return (
    <BannerLayout>
      <Carousel/>
    </BannerLayout>
  );
};

const BannerLayout = styled.div`
  width: 100vw;
  height: 32vh;
  margin-top: 8.9vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Banner;
