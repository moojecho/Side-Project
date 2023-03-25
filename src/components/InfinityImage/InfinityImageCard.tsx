import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as allTypes from "./type";

const InfinityImageCard = () => {
  const cardList: allTypes.mapInfo[] = useAppSelector(
    (state: any) => state.catLoctionMap.mapList
  );

  console.log(cardList);

  return (
    <>
      {cardList?.map((list) => {
        return <InfinityImagecardLayout src={list.image} />;
      })}
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
      <InfinityImagecardLayout src={cardList[0].image} />
    </>
  );
};

const InfinityImagecardLayout = styled.img`
  max-width: 200px;
  height: 150px;
  border: "";
  border-radius: 2px;
  box-shadow: 0 0px 3px 0.5px gray;
  margin: 10px;
`;

export default InfinityImageCard;
