import {useState} from 'react'

//custom hook
function useCounter(){
  const [count ,setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
  }

  return{
    count: count,
    increaseCount: increaseCount
  }
}

export default function App(){
  return(
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

function Counter(){
  const {count, increaseCount}= useCounter();
  return(
    <div>
      <button onClick={increaseCount}>
        {count}
      </button>
    </div>
  )
}
