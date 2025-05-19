let currentIndex = 3;

    function addTodo(){

        const inputEl = document.getElementById("inp");
        const todoText = inputEl.value.trim();

        if (todoText == ''){
            alert('Please enter a valid element');
            return;
        }

        const parentEl = document.getElementById("Todo");

        const newTodo = document.createElement('div');
        newTodo.setAttribute("id" , 'Todo-' , currentIndex);

        const newHeading = document.createElement('h4');
        newHeading.textContent = currentIndex + '.' + todoText;

        const newButton = document.createElement('button');
        newButton.textContent= 'Delete';
        newButton.setAttribute("onlick", "deleteTodo (" + currentIndex + ")" );

        newTodo.appendChild(newHeading);
        newTodo.appendChild(newButton);

        parentEl.appendChild(newTodo);

        currentIndex++;

        inputEl.value= '';
    }

    function deleteTodo(index){

        const element = document.getElementById("Todo-" + index);
        if(element){
            element.parentNode.removeChild(element);
        }
    }