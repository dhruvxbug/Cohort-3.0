import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom" //imp 

export default function App(){
  return (
     <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/neet/class11" element={<Class11Program/>} />
        <Route path="/neet/class12" element={<Class12Program/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
     </div>
  )
}

function Layout(){
  return (
    <div style={{height: "100vh"}}>
      <Header/>
      <div style={{height: "90vh"}}>
        <Outlet/>
      </div>
      Footer | contact us 
    </div>
  )
}

function Header(){
   return(
    <div>
      <Link to="/">Allen</Link>
      <Link to="/neet/class11">class 11</Link>
      <Link to="/neet/class12">class 12</Link>
    </div>
   )
}

function ErrorPage(){
  return(
    <div>
       Sorry page not found
    </div>
  )
}
function Class11Program(){
  return(
    <div>
        NEET for class 11th 
    </div>
  )
}
function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return(
    <div>
        NEET for class 12th 
        <button onClick={redirectUser}> Go back to the landing page </button>
    </div>
  )
}
function LandingPage(){
  return(
    <div>
        I am Main landing page 
    </div>
  )
}