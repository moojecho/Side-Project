declare global {
  interface Window {
    kakao: any;
  }
}

export type MapInformation = {
    catImage:string,
    catNum:number,
    catLocation:string
  }
  
export type TotalSlides = number

export type currentSlide = {
  currentSlide:number
}