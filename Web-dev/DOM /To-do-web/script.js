let n= 1;
    function addTodo(){
        const inputEl = document.querySelector("input");
        const value = inputEl.value;
        
        const newDivEl = document.createElement("div");
        newDivEl.setAttribute("id","one-", n);
        n = n + 1;
        newDivEl.innerHTML = "<div>" + value +"</div> <button id= 'one- n' onclick='deleteitem(" + n + " )'> delete</button>";
        document.querySelector ("body").appendChild(newDivEl);
    }
    
    
    function deleteitem(){
       const Element = document.getElementById("one-" + index);
       Element.parentNode.removeChild(Element);
    }