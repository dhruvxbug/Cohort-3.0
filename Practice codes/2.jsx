import React ,{useState, useEffect} from 'react'

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent 
    name ={post.name}
    subtitle={post.subtitle}
    time={post.time}
    description={post.description}
    />
  )

  function addPost(){
    setPosts([...posts, {
       name: "harkirat",
      subtitle: "10000 followers",
      time: "2 min ago",
      image: "url ",
      description: "new post added"
    }])
  }

  return (
    <div style={{background: "lightblue", height: "200vh", width: "100vw"}}>
      <button onClick={addPost}> Add Post</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
         {postComponents}
        </div>
      </div>
        <NotificationIcon/>
        <Counter/>
    </div>
  )
}

const style = {minWidth: 250, backgroundColor: "white", borderRadius: 10, borderColor:"gray" , borderWidth: 1, minHeight: 100, color: "black", padding: 20}

 
function PostComponent({name, subtitle,time, image, description}){
      return (
        <div style={style}>
          <div style={{display: "flex"}}>
            <img src={image} style={{width: 50, height:50, borderRadius:100, paddingRight: 8}} />
           <div>
                <b>{name}</b>
               <div>{subtitle}</div>
                { (time !== undefined) ? <div style={{display: 'flex'}}>
            <div style={{fontSize: 12, paddingRight: 5}}>{time}</div>
             <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8Ce0dmk56WOTf3FADoQjO7zq5SEH-o1v2A&s"} style={{height: 10, width: 10}} /> </div>: null}
          </div> 
          </div>
            <div>{description}</div> 
        </div>
      )
}



function NotificationIcon(){
  const [ notificationCount, setNotificationCount] = useState(0); 

  // setInterval(increment, 1000);
  
  function increment(){
    setNotificationCount(notificationCount+1);
  }
  return(
    <div style={{display: "flex"}}>
      <div style={{background: "red", borderRadius: 50, width: 20, height:20, paddingLeft: 10, paddingTop: 5}}>
        {notificationCount}
      </div>
      <img style={{cursor: "pointer", width: 30, height: 30}} src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"/>
       <div>
        <button style={{color: "white"}} onClick={increment}>
         <b style={{color: "white"}}> Increase Count  </b>
        </button> 
      </div>
    </div>
   
  );
}


function Counter(){
  const [count, setCount] =useState(1);

  function increaseCount(){
    setCount(currentValue=> currentValue+1)
  }

  useEffect(function(){
    console.log("above setInterval");
    setInterval(increaseCount,1000);
  },[])

  useEffect(function(){
    console.log("changes in db fetch" + count);
  },[count])

  return (<div style={{color: "black"}}>
    {count}
  </div>)
}

export default App