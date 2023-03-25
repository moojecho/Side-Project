declare global {
  interface Window {
    kakao: any;
  }
}

export type MapInformation = {
  mapNum?: number;
  catImage: string;
  catNum: number;
  catLocation: string;
};

export type TotalSlides = number;

export type currentSlide = {
  currentSlide: number;
};

export type mapInfo = 
  {
    image?:string;
    _id?: string;
    catNum:number;
    mapNum: string;
    mapLocation1: number;
    mapLocation2: number;
    catLocation: string;
    distance?:number;
  }
;

export type locationType = {
  loaded: boolean;
  coordinates: { lat: number; lng: number };
  error?: { code: number; message: string };
};

