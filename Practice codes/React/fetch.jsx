import React, {useState, useEffect} from 'react'

function App(){
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] =useState({});
  const [loading, setLoading] =useState(true);

  useEffect(function(){
    setLoading(true);
    console.log("send request to db for " + currentTab);
    fetch("jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res=>{
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    });
  },[currentTab])

  return(
    <div>
      <button onClick={()=> setCurrentTab(1)} style={{ background: "lightblue" ,color: currentTab == 1 ? "red" : "black"}}>Todo-1</button>
      <button onClick={()=> setCurrentTab(2)}  style={{background: "lightblue" ,color: currentTab == 2 ? "red" : "black"}}>Todo-2</button>
      <button onClick={()=> setCurrentTab(3)} style={{background: "lightblue" ,color: currentTab == 3 ? "red" : "black"}}>Todo-3</button>
      <button onClick={()=> setCurrentTab(4)}  style={{background: "lightblue" ,color: currentTab == 4 ? "red" : "black"}}>Todo-4</button>
      <br />
     {loading ? "loading.." : tabData.title}
    </div>
  )
}

export default App