export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";


export function increment() {
    console.log("increment action creator :");

    return { type: INCREMENT };
  }
  
  export const decrement = () => ({ type: DECREMENT });