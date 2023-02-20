declare global {
  interface Window {
    kakao: any;
  }
}

export type MapInformation = {
    catImage:string,
    catNumber:number,
    catLocation:string
  }
  
export type TotalSlides = number

export type currentSlide = {
  currentSlide:number
}