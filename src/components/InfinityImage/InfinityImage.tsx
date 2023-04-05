import { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import * as allTypes from "./type";
import { InfinityImageCard } from "./index";

const fetchData = async (key: string) => {
  const response = await axios.get(`http://localhost:3001/catMap`);
  return response.data;
};

const InfinityImage = () => {
  const pageRef = useRef(1);

  const { data, isLoading, isFetching } = useQuery(
    ["items", pageRef.current],
    () => fetchData("items")
  );

  const [mapList, setMapList] = useState<allTypes.mapInfo[]>(data);

  // if (isFetching)
  //   return <FetchingError>{`서버에서 문제가 생겼나봐요`}</FetchingError>;
  // if (isLoading) return <FetchingError>{`로딩중이에요!`}</FetchingError>;

  console.log(data, isFetching, isLoading);
  return (
    <InfinityImageLayout>
      <ImageLayoutTitle>실제 길냥이들을 만나봐요!</ImageLayoutTitle>
      {isLoading ? (
        <FetchingError>{`로딩중이에요!`}</FetchingError>
      ) : (
        <InfinityImageCard mapList={mapList} />
      )}
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

const FetchingError = styled.div`
  width: 960px;
  min-height: 250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    width: 350px;
    min-height: 200px;
    font-size: 15px;
  }
`;

export default InfinityImage;
