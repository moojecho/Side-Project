import { useState, useEffect } from "react";
import * as allTypes from "../components/Map/type";
import { useGeolocation } from "./index";

const useGetDistance = (example: allTypes.mapInfo[]) => {
  const userLocation = useGeolocation();
  const [mapList, setMapList] = useState<allTypes.mapInfo[]>([]);
  
  useEffect(() => {
    if (example) {
      example.forEach((list) => {
        if (userLocation.coordinates?.lat && userLocation.coordinates?.lng) {
          const lat1: number | undefined = userLocation.coordinates?.lat;
          const lon1: number | undefined = userLocation.coordinates?.lng; // 수정된 부분
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
          const distance = R * c; // km 단위의 거리
          if (distance >= 0) {
            // distance가 3 이하일 때 mapList에 list 추가
            setMapList((prevMapList) => [
              ...prevMapList,
              { ...list, distance: Number(distance.toFixed(1)) },
            ]);
          }
        }
      });
    }
  }, [example, userLocation.coordinates?.lat]);
  
  return mapList;
};

export default useGetDistance;
