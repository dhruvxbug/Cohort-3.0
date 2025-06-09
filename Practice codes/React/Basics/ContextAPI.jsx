import {useState, createContext, useContext} from 'react'

//context.ts
const BulbContext = createContext();

export default function App(){

  return(
    <div>
     <BulbProvider>
        <LightBulb/>
     </BulbProvider>
    </div>
  )
}

function BulbProvider({children}){
  const [BulbOn, setBulbOn] =useState(true);
    return(
      <BulbContext.Provider BulbOn={BulbOn} setBulbOn={setBulbOn}>
       {children}
      </BulbContext.Provider>
    )
}

function LightBulb(){
  return(
    <div>
      <BulbState />
      <ToggleBulbState/>
    </div>
  )
}

function BulbState(){
  const {BulbOn}= useContext(BulbContext);
  return(
    <div>
       {BulbOn ? "Bulb on": "Bulb off"}
    </div>
  )
}

function ToggleBulbState(){
const {BulbOn, setBulbOn}= useContext(BulbContext);

  function toggle(){
    setBulbOn(!BulbOn);
  }
  return(
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  )
}


import {useState, createContext, useContext, Children} from 'react'

const CounterContext = createContext();

function CounterContextProvider({children}){
  const [count, setCount] = useState(0);
  return(
      <CounterContext.Provider value={{count, setCount}}>
        {children}
      </CounterContext.Provider>
  )
}

export default function App(){
  return(
    <div>
      <Parent/>
    </div>
  )
}

function Parent(){
  return(
    <div>
      <CounterContextProvider>
        <ButtonHunMai/>
        <CountHunMai/>
      </CounterContextProvider>
    </div>
  )
}

function ButtonHunMai(){
  const {setCount} =useContext(CounterContext);

  function increase(){
    setCount(count =>count+1)
  }
  return(
    <div>
       <button onClick={increase}>
         Increase count 
       </button>
    </div>
  )
}

function CountHunMai(){
  const {count} = useContext(CounterContext);

  return(
    <div>
      Count: {count}
    </div>
  )
}

//another similar example
import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <Counter/>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <Increase setCount={setCount}/>
      <Decrease  setCount={setCount}/>
    </div>
  )
} 

function Increase({setCount}){

  function increase(){
    setCount(c => c+1);
  }
  return (
    <div>
      <button onClick={increase}> Increase </button>
    </div>
  )
}


function Decrease({setCount}){
   function decrease(){
    setCount(c => c-1);
  }
  return (
    <div>
      <button onClick={decrease}> Decrease </button>
    </div>
  )
}
