import styled from "styled-components";

import { InfinityImageCard } from "./index";

const InfinityImage = () => {
  return (
    <InfinityImageLayout>
      <ImageLayoutTitle>실제 길냥이들을 만나봐요!</ImageLayoutTitle>
      <InfinityImageCard />
    </InfinityImageLayout>
  );
};

const InfinityImageLayout = styled.div`
  width: 960px;
  min-height: 300px;
  margin: auto;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: 480px) {
    width: 350px;
    min-height: 200px;
  }
`;
const ImageLayoutTitle = styled.p`
  width: 500px;
  height: 50px;
  font-size: 25px;
  margin: 0px 0 0px 50px;
  font-family: NotoSanskr;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    width: 360px;
    height: 40px;
    font-size: 18px;
    margin: 0px 0 0px 30px;
  }
`;

export default InfinityImage;
