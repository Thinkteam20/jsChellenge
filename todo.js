// step one 
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
    toDoList = document.querySelector(".js-toDoList");

    //step four 
const TODOS_LS = 'toDos';


// step seven
function paintToDo(text){
    //console.log(text);
    // to show the .value dont need to go back to html create "li" to create new element 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "✘";
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}
//step six
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // after execute paintToDo and make form look default creating code below.
    toDoInput.value = "";
}
 
// step three 
function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS)
    if(toDos !== null){
    }
}

// step two 
function init(){
    loadToDos();
    // five
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
