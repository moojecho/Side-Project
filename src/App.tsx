import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./pages";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element ={<MainPage />} />
      </Routes>
    </DivApp>
  );
}

const DivApp = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin: -8px 0px;
  margin-left: -8px;
`;

export default App;
