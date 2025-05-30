const App=()=>{
 return(
  <div>
     <Todo key={1} title={"gym"} done= {false} />
     <Todo key={2} title={"homework"} done= {false} />
  </div>
 );
};

function Todo({title, done}){
  return (
    <div>
      {title} - {done ? "Done" : "Not done!"}
    </div>
  )
}

export default App

// we are mapping the content if the array in the component format ,where the dynamic parts of the component can read the values and display all the parts of the array 
// @react-refresh:208 Each child in a list should have a unique "key" prop.
// http://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key