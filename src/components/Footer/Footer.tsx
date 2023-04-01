import styled from "styled-components";

const Footer = () => {
  return (
    <FooterLayout>
      <TeamInfoLayout>{'상호명: (주)VisitCat \n팀원: 조무제(FE) | 조무제 (BE)\n주소: 서울특별시 강서구 금낭화로'}</TeamInfoLayout>
    </FooterLayout>
  );
};

const FooterLayout = styled.div`
  width: 100vw;
  min-height: 250px;
  background-color: #FF9500;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 350px;
    min-height: 200px;
  }
`;


const TeamInfoLayout = styled.div`
  width: 400px;
  height: 200px;
  color: white;
  font-size: 12px;
  margin-left: 50px;
  white-space: pre-wrap;
`;

export default Footer;
