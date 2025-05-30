import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"

export default function App(){
  return (
     <div>
    <BrowserRouter>
      <Link href="/">Allen</Link>
      <Link href="/neet/class11">class 11</Link>
      <Link href="/neet/class12">class 12</Link>
      <Routes>
        <Route path="/neet/class11" element={<Class11Program/>} />
        <Route path="/neet/class12" element={<Class12Program/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
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