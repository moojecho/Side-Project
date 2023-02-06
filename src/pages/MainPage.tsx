import React from "react";
import { useSelector } from "react-redux";

import { Header, Banner, LoginModal,Map } from "../components/index";

const MainPage = () => {
  const loginToggle = useSelector(
    (state: any) => state.modal.loginModal.toggle
  );

  return (
    <div>
      <Header />
      <Banner />
      <Map/>
      {loginToggle ? <LoginModal /> : null}
    </div>
  );
};

export default MainPage;

// const outerRef = useRef();
// const [scrollIndex, setScrollIndex] = useState(1);
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(__getRankList());
// }, [dispatch]);

// useEffect(() => {
//   const wheelHandler = (e) => {
//     e.preventDefault();
//     const { deltaY } = e;
//     const { scrollTop } = outerRef.current;
//     const pageHeight = window.innerHeight;
//     const DIVIDER_HEIGHT = 5;
//     if (deltaY > 0) {
//       if (scrollTop >= 0 && scrollTop < pageHeight) {
//         //현재 1페이지
//         outerRef.current.scrollTo({
//           top: pageHeight + DIVIDER_HEIGHT,
//           left: 0,
//           behavior: "smooth",
//         });
//         setScrollIndex(2);
//       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
//         //현재 2페이지

//         outerRef.current.scrollTo({
//           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
//           left: 0,
//           behavior: "smooth",
//         });
//         setScrollIndex(3);
//       } else {
//         // 현재 3페이지

//         outerRef.current.scrollTo({
//           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
//           left: 0,
//           behavior: "smooth",
//         });
//         setScrollIndex(3);
//       }
//     } else {
//       if (scrollTop >= 0 && scrollTop < pageHeight) {
//         //현재 1페이지

//         outerRef.current.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "smooth",
//         });
//         setScrollIndex(1);
//       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
//         //현재 2페이지
//         outerRef.current.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "smooth",
//         });
//         setScrollIndex(1);
//       } else {
//         // 현재 3페이지

//         outerRef.current.scrollTo({
//           top: pageHeight + DIVIDER_HEIGHT,
//           left: 0,
//           behavior: "smooth",
//         });
//         setScrollIndex(2);
//       }
//     }
//   };
//   const outerRefCurrent = outerRef.current;
//   outerRefCurrent.addEventListener("wheel", wheelHandler);
//   return () => {
//     outerRefCurrent.removeEventListener("wheel", wheelHandler);
//   };
// }, []);
