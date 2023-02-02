import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./pages";
import {useSelector} from 'react-redux';

function App() {

  const loginToggle = useSelector((state:any)=>state.modal.loginModal.toggle);
  console.log(loginToggle);
  return (
    <DivApp toggle={loginToggle}>
      <Routes>
        <Route path="/" element ={<MainPage />} />
      </Routes>
    </DivApp>
  );
}

const DivApp = styled.div<{toggle:boolean}>`
  width: 100vw;
  height: 100vh;
  opacity: ${props=>(props.toggle?0.3:1)};
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin: -8px 0px;
  margin-left: -8px;
`;

export default App;
