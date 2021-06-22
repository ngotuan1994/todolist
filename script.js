let addButton = document.getElementById("add-todo");
let list = document.getElementById("todoList");
let todo = document.getElementById("todo");
let clearBtn = document.getElementById("clear-todoList");
addButton.addEventListener("click", ()=>{
    let newtodo = document.createElement('p');
    newtodo.classList.add("text-todo")
    if(todo.value.trim() !== "" ){
        newtodo.textContent = todo.value;
        todo.value = "";
        list.appendChild(newtodo);
    }
    newtodo.addEventListener("click",()=>{
        newtodo.style.textDecoration= "line-through";
    })
})
clearBtn.addEventListener("click",()=>{
    todo.value = "";
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
})
