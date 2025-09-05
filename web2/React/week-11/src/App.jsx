import { RecoilRoot, useRecoilValueLoadable, useRecoilStateLoadable } from "recoil";
import { todoAtomFamily } from "./atoms";
import React from "react";

export default function App() {
  return (
    <div>
      <h1>hiiii</h1>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValueLoadable(todoAtomFamily(id));
  
  if (currentTodo.state === "loading"){
    return (
      <div>
        Loading
      </div>
    )
  } 
  else if (currentTodo.state === "hasValue"){
    return (
    <>
      <div>{currentTodo.contents.title}</div>
      <div>{currentTodo.contents.description}</div>
    </>
  );
  }
  else if(currentTodo.state === "hasError"){
    return (
      <div>
        error hun lodu
      </div>
    );
  }
}