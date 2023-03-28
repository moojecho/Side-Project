import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as allTypes from "./type";

const InfinityImageCard = () => {
  const cardList: allTypes.mapInfo[] = useAppSelector(
    (state: any) => state.catLoctionMap.mapList
  );

  return (
    <>
      {cardList?.map((list) => {
        return <InfinityImagecard key={list._id} src={list.image} />;
      })}
      <InfinityImagecard src={cardList[0].image} />
      <InfinityImagecard src={cardList[0].image} />
      <InfinityImagecard src={cardList[0].image} />
      <InfinityImagecard src={cardList[0].image} />
    </>
  );
};

const InfinityImagecard = styled.img`
  max-width: 200px;
  height: 150px;
  border: "";
  border-radius: 2px;
  box-shadow: 0 0px 3px 0.5px gray;
  margin: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 110px;
    font-size: 18px;
    margin: 10px 0px 0px 18px;
  }
`;

export default InfinityImageCard;
