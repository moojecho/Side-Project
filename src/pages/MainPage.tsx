import React from "react";
import { useSelector } from "react-redux";

import { Header, Banner, LoginModal,Map,AddMapModal,InfinityImage } from "../components/index";

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
    </div>
  );
};

export default MainPage;