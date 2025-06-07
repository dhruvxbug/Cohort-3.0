import React, { useState, useEffect } from 'react';

export default function App(){
     return(
      <div>
        <ErrorBoundary>
          <Card1/>
        </ErrorBoundary>
        <Card2/>
      </div>
     )
}

function Card1() {

  throw new Error("Error while rendering"); //fallback UI if error is found 

  return(
    <div style={{background:"red" ,borderRadius:10, padding: 10}}>
      hi there
    </div>
  ) 
}

function Card2(){
 return(
    <div style={{background:"red" ,borderRadius:10, padding: 10}}>
      hi there
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasError : false};
  }

  static getDerivedStateFromError(error){
    return {hasError: true};
  }

  componentDidCatch(error, info){
    console.error("Error Caught:", error,info);
  }

  render(){
    if (this.state.hasError){
      return <h1>something went wrong</h1> }
      return this.props.children;
  }
}