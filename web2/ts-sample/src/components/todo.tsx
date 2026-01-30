// 
//  interface TodoType{
//        title: string;
//        description: string;
//        done: boolean;
//   }
//   interface TodoInput{
//     todo:TodoType;
//   }
  
// export default function todo({todo}: TodoInput){
 
//   return(
//     <div>
//         <h1>{todo.title}</h1>
//         <h2>{todo.description}</h2>
//     </div>
//   )
// }



interface TodoType{
     todo: {
       title: string;
       description: string;
       done: boolean;
     }
   lastDoneAt: Date,
  }
  
function Todo(props: TodoType){
 
}

<Todo todo={{
    title:"go to gym",
    description:"gym ja bhai",
    done : false
}} lastDoneAt={new Date()} />