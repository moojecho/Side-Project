export type MapInformation = {
    catImage:string,
    catNumber:number,
    catLocation:string
  }
  
  declare global {
    interface Window {
      kakao:any;
    }
  }