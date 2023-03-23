import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as allTypes from "../components/Map/type";
import { useGeolocation } from "./index";

const useGetDistance = () => {
  const example: allTypes.mapInfo = useAppSelector(
    (state: any) => state.catLoctionMap.mapList
  );
  const userLocation = useGeolocation();
  const [mapList, setMapList] = useState<allTypes.mapInfo>([
    {
      catLocation: "서울특별시 은평구 수색로 193",
      catNum: 2,
      mapLocation1: 37.576618534456955,
      mapLocation2: 126.90317543944212,
      mapNum: "map2",
      _id: "640ae8865d8b28600b87a718",
    },
  ]);

  example.find((list) => {
    if (userLocation.coordinates?.lat && userLocation.coordinates?.lng) {
      const lat1: number | undefined = userLocation.coordinates?.lat;
      const lon1: number | undefined = userLocation.coordinates?.lat;
      const lat2: number | undefined = list.mapLocation1;
      const lon2: number | undefined = list.mapLocation2;

      const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
      };

      const R = 6371; // 지구 반지름 (km)
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = (R * c) / 1000; // km 단위의 거리
      // setMapList(mapList.concat(list));
      // return console.log(lat1,lon1,lat2,lon2,Number(distance.toFixed(1)));
      return console.log(list);
    }
  });
};

export default useGetDistance;
