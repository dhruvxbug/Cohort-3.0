let todos=[];

//state 
function addTodo(){
    todos.push({
        title: document.querySelector("input").value
    })
    render()
}

function deleteFirstTodo(){
    todos.pop()
    render()
}

function deleteLastTodo(){
    todos.splice(todos.length-1 , 1)
    render()
}

function deleteTodo(){
    todos.pop()
    render()
}

//component 
function createTodoComponent(todo){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    button.innerHTML="Delete"
    button.setAttribute("onclick", "deleteTodo()")
    h1.innerHTML = todo.title;
    div.append(h1)
    div.append(button)
    return div
}

//react 
function render(){
    document.querySelector("#todos").innerHTML =""
    for (let i=0; i<todos.length; i++){
        const element = createTodoComponent(todos[i])
        document.querySelector("#todos").appendChild(element)
    }
}