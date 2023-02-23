import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { logo } from "../../static/index";

import { LoginButton, SignButton } from "./index";

const Header = () => {
  const navigator = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("refresh-token");
    window.localStorage.removeItem("authorization");
    navigator("/");
  };

  return (
    <HeaderLayout>
      <LogoLayout>
        <Logo src={logo} />
      </LogoLayout>
      <LoginSignLayout>
        <LoginButton />
        <SignButton />
      </LoginSignLayout>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  border-bottom: 0.5px solid gray;
  position: absolute;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.5px 1px gray;
`;

const LogoLayout = styled.div`
  width: 75px;
  height: 100%;
  margin-left: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 4.5vw;
  height: 7.5vh;
  @media only screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
  cursor: pointer;
`;
const LoginSignLayout = styled.div`
  width: 250px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 150px;
  }
`;
export default Header;
