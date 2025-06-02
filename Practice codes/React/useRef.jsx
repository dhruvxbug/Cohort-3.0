import {useRef, useState} from 'react'

export default function App(){

  const inputRef = useRef(); 

  function FocusOnInput(){
     inputRef.current.focus();
  }

  return(
    <div>
      Sign up 
      <input ref={inputRef} type={"text"} />
      <input type={"text"} />
      <button onClick={FocusOnInput}>Submit</button>
    </div>
  )
}

// useRef - refrence to a value , such that when you change the value, the component does not re-render 
//useRef is a good middle ground between useState and variable 
// let value = xyz; is a variable that will cause re-render and the value will get re-initialized and not presist through 
// new things - .focus() amd .currentz 