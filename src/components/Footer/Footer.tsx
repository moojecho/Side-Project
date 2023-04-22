import styled from "styled-components";

const Footer = () => {
  return (
    <FooterLayout>
      <TeamInfoLayout>
        {
          "상호명: (주)VisitCat \n팀원: 조무제(FE) | 조무제 (BE)\n주소: 서울특별시 강서구 금낭화로 \n깃허브: https://github.com/moojecho/VisitCat"
        }
      </TeamInfoLayout>
    </FooterLayout>
  );
};

const FooterLayout = styled.div`
  width: 100vw;
  min-height: 200px;
  background-color: #ff9500;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    justify-content: center;
    min-height: 125px;
  }
`;

const TeamInfoLayout = styled.div`
  width: 400px;
  height: 200px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0px 0 0  50px;
  white-space: pre-wrap;
  @media only screen and (max-width: 480px) {
    height: 100px;
    font-size: 10px;
    margin: 15px 0px 0px 25px;
  }
`;

export default Footer;
