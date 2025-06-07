// app.jsx code-
import {useState, useEffect} from 'react'
import {useFetch, useTitleFetch} from './hooks/useFetch.jsx'

export default function App(){
  const [currentPost, setCurrentPost]= useState(1);
  const {finalData ,loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost , 10);

  if(loading){
    return 
    <div>
      Loading..
    </div>
  }
  return(
    <div>
      <button onClick={()=> setCurrentPost(1)}>1 </button>
      <button onClick={()=> setCurrentPost(2)}>2 </button>
      <button onClick={()=> setCurrentPost(3)}>3 </button>
      {JSON.stringify(finalData)}
    </div>
  )
}

//useFetch file - 
import {useState, useEffect} from 'react';

export function useTitleFetch(){
     const [post, setPost]= useState({});

     async function getPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setPost(json);
     }

     useEffect(()=>{
        getPosts();
     },[])

     return post.title;
}

export function useFetch(url, retryTime){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);
     
    async function getDetails(){
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setFinalData(json);
      setLoading(false);
    }

    useEffect(()=>{
      getDetails();
    }, [url])

    useEffect(()=>{
      setInterval(getDetails, retryTime* 1000) //cleanup 
    },[])

    return {
      finalData,
      loading
   }
}