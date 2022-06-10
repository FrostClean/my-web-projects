// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
export const scale = (n:number,inMin:number,inMax:number,outerMin:number,outerMax:number):number => (n - inMin) * (outerMax - outerMin) / (inMax - inMin) + outerMin;