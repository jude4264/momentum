const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
}

function deleteToDO(event){
    // console.log(event.target);
    //console.log(event.target.parentElement);
    // console.dir(event.target);
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    console.log(li.id);
    console.log(typeof li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id) );
    li.remove();
    saveToDos();
}


function paintToDo(newTodo){
    // console.log("i will paint " + newTodo);
    const li = document.createElement("li");
    li.id= newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit" , handleTodoSubmit );


// function sayHello(item){
//     console.log("this is turn of", item);
// }


const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos !== null){
    
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is turn of", item));
    toDos = parsedToDos; //이전 투두 복원 
    parsedToDos.forEach(paintToDo);

}

function saveFilter(item){return item !== 3;}