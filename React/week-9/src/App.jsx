import React, {useState, useEffect} from 'react'

function App(){
  const [showTimer, setShowTimer] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setShowTimer(currentValue=> !currentValue);
    },5000)
  },[])
  return(
    <div>
      {showTimer && <Timer/>}
    </div>
  )
}

const Timer = ()=>{
   const[seconds, setSeconds] = useState(0);

   useEffect(()=>{
    let clock =  setInterval(()=>{
      console.log("I need clean up bitch")
      setSeconds(prev=> prev+1)
    }, 1000)

    return()=>{
   // clan up code 
    clearInterval(clock);
    }
   },[]);

   return(
    <div>
      {seconds} elapsed
    </div>
   )
}

export default App