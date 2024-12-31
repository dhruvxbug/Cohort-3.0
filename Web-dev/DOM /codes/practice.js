// 1. Query Selector 

const title = document.querySelector('h1');
console.log(title.innerHTML)

const firstTodo = document.querySelector('h4');
console.log(firstTodo.innerHTML)

// 2. QuerySelectorALL 

const secondTodo = document.querySelectorAll('h4')[1];
console.log(secondTodo.innerHTML) 

//3. .innerHTML - Used for updating the HTML inside an element
//   .textContent - Used for updating the text content inside an element

const firstTodo = document.querySelector("h4");
firstTodo.innerHTML = "Dont' take class"

//4. Delete Element 

// removeChild - Removes a specific node of a parent
// onclick - function that triggers whenever you click on a button

