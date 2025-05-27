function App() {

  return (
    <div style={{background: "black", height: "100vh", width: "100vw"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <PostComponent/>
          <br />
          <PostComponent/>
          <br />
          <PostComponent/>
        </div>
      </div>
    </div>
  )
}

const style = {minWidth: 200,maxWidth:300, backgroundColor: "white", borderRadius: 10, borderColor:"gray" , borderWidth: 1, minHeight: 100, color: "black", padding: 20}
function PostComponent(){
      return (
        <div style={style}>
          <div style={{display: "flex"}}>
            <img src={"https://yt3.googleusercontent.com/C25u3DcSguL-wd3GaO110Q1fyO5ClTraTjtF72kJhZtpQwuAv3zLmb7K-ZLJecQQJBVvP1McmA=s900-c-k-c0x00ffffff-no-rj"} style={{width: 50, height:50, borderRadius:20, paddingRight: 8}} />
           <div>
                <b>100xdevs</b>
               <div>23,888 followers</div>
               <div>12M</div>
          </div> 
          </div>
            <div>
            Wanna build a website ,you are reading the right post!
           </div> 
        </div>
      )
}


//components 
//structure using useState

export default App
