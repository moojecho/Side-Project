import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {logo} from "../../static/index";

const InfinityImage = () => {
  
  return (
    <InfinityImageLayout>
    </InfinityImageLayout>
  );
};

const InfinityImageLayout = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  border: 1px solid black;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default InfinityImage;
