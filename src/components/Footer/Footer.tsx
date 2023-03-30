import styled from "styled-components";

const Foooter = () => {
  return (
    <InfinityImageLayout>
    </InfinityImageLayout>
  );
};

const InfinityImageLayout = styled.div`
  width: 100vw;
  min-height: 250px;
  margin: auto;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #FF9500;
  @media only screen and (max-width: 480px) {
    width: 350px;
    min-height: 200px;
  }
`;

export default Foooter;
