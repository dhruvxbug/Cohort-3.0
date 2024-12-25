function addTodo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    console.log(value);
}

let ctr= 0;
function callback(){
    console.log(ctr);
}
setInterval