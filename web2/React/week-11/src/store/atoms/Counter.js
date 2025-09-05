import {atom, selector} from 'recoil';

export const counterAtom = atom({
    key: "counter",
    default: 0
})

export const evenSelector = selector({
  key: "isEvenSelector",
  get: function({get}){
    const currentCount = get(counterAtom);
    const isEven = (currentCount % 2== 0);
    return isEven; 
  }
})


// app,js

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom, evenSelector } from "./store/atoms/Counter"


export default function App(){

  return (
    <div>
      <RecoilRoot>
         <Buttons/>
        <Counter/>
        <IsEven/>
      </RecoilRoot>
    </div>
  )
}

function Buttons(){
const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={()=>setCount(c=>c+2)}>Increase</button>
      <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
    </div>
  )
}

function Counter(){
  const count = useRecoilValue(counterAtom);

  return(
    <div>
     {count}
    </div> 
  )
}

function IsEven(){
  const even = useRecoilValue(evenSelector);

  return (
    <div>
     {even? "even" : "odd"}
    </div>
  )
}