import {useState, useEffect} from 'react';

//useEffect, dependency array, cleanups 
export default function App(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function increase(){
       setCount(c =>c +1);
    }

    function decrease(){
       setCount2(c =>c -1);
    } 

    return <div>
        <Counter count={count} count2={count2}/>
        <button onClick={increase}> Increase count </button>
        <button onClick={decrease}> Decrease count </button>
    </div>
}

function Counter(props){
  
    useEffect(function(){
        console.log("mount");

        return function(){
            console.log("unmount");
        }
    }, []);

    useEffect(function(){
        console.log("count has changed");

        return function(){
            console.log("cleanup inside second effect ")
        }
    }, [props.count , props.count2])

    return <div>
        Counter1 {props.count} <br></br>
        Counter2 {props.count2}
    </div>
}