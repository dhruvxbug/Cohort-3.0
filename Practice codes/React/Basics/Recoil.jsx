import React, {createContext, useContext, useState} from 'react'
import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil'

const count = atom({
  key: 'countState',
  default:0,
});

function Parent(){
  return(
    <RecoilRoot>
      <Increase/>
      <Value/>
    </RecoilRoot>
  );
}

function Increase() {
  const setCount = useSetRecoilState(count);
  return (
  <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button> )
}


function Value() {
  const countValue = useRecoilValue(count);
  return (<p>Count: {countValue}</p>)
}

const App = () => {
  return( <div>
    <Parent />
  </div>)
};

export default App;

// recoil not working with react 19+ , a lot of other libraries doing the same thing 