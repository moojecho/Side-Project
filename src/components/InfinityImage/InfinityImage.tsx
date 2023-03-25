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
  height: 80vh;
  margin: auto;
  flex-wrap: wrap;
  overflow: scroll;
`;
const ImageLayoutTitle = styled.p`
  width: 500px;
  height: 50px;
  font-size: 25px;
  margin: 0px 0 0px 50px;
  font-family: NotoSanskr;
  font-weight: bold;
`;

export default InfinityImage;
