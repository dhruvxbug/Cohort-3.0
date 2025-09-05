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