function addTodo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    console.log(value);
}

let ctr= 0;
function callback(){
    document.querySelectorAll("h4")[1].innerHTML =ctr;
    ctr = ctr + 1;
}

setInterval (callback, 1000);