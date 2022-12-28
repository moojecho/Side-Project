import styled from "styled-components";

import {logo} from "../../static/index";

import {LoginButton,SignButton} from "./index";

const Header = () => {
  const logout = () => {
    window.localStorage.removeItem("refresh-token");
    window.localStorage.removeItem("authorization");
    navigator("/");
  };

  return (
    <HeaderLayout>
      <LogoLayout>
        <Logo src={logo}/>
      </LogoLayout>
      <LoginSignLayout>
        <LoginButton />
        <SignButton />
      </LoginSignLayout>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  width: 99.8vw;
  height: 10vh;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoLayout = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 5vw;
`;

const Logo = styled.img`
  width: 90px;
  height: 80px;
  margin-left: -20px;
  cursor: pointer;
`;
const LoginSignLayout = styled.div`
  width: 200px;
  display: inline-flex;
`;
export default Header;
