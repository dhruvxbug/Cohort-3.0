import { useEffect, useRef, useState } from "react";

function useDebounce(value, delay){
  const [debouncedValue, settDebouncedValue] = useState(value);

  useEffect(()=>{
    const handler = setTimeout(()=>{
      settDebouncedValue(value);
    },delay )

    return ()=>{
      clearTimeout(handler);
    }
  } ,[value, delay]);

  return debouncedValue;
}

export default function App(){
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e){
    setInputVal(e.target.value);
  }

  useEffect(()=>{
    console.log("expensive operation");
  }, [debouncedValue])

  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  )
}


// e.target.value