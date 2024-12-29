let n= 0;
    function addTodo(){
        const inputEl = document.querySelector("input");
        const value = inputEl.value;
        
        const newDivEl = document.createElement("div");
        newDivEl.setAttribute("id","one-"+ n);
        newDivEl.innerHTML = "<div>" + value +'</div> <button onclick ="deleteitem(' + n + ' )"> delete</button>';
        document.querySelector ("body").appendChild(newDivEl);
        n = n + 1;
    }
    
    
    function deleteitem(index){
       const element = document.getElementById("one-" + index);
       element.parentNode.removeChild(element);
    }