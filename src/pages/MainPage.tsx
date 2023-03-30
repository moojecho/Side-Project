import React from "react";
import { useSelector } from "react-redux";

import { Header, Banner, LoginModal,Map,AddMapModal,InfinityImage,Footer } from "../components/index";

const MainPage = () => {
  const loginToggle = useSelector(
    (state: any) => state.modal.loginModal.toggle
  );
  const addMapToggle = useSelector(
    (state: any) => state.modal.addMapModal.toggle
  );  
  return (
    <div>
      <Header />
      <Banner />
      <Map/>
      <InfinityImage/>
      {loginToggle ? <LoginModal /> : null}
      {addMapToggle ? <AddMapModal /> : null}
      <Footer/>
    </div>
  );
};

export default MainPage;