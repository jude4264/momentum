const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteToDO(event){
    // console.log(event.target);
    //console.log(event.target.parentElement);
    // console.dir(event.target);
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo){
    // console.log("i will paint " + newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click" , deleteToDO)
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    todoList.appendChild(li);
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit" , handleTodoSubmit )