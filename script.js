const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoUL = document.getElementById("todo-ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

function strikethroughText(li) {
    li.classList.add("strike-through-text");
} 

function deleteLi(li) {
    li.remove();
}

function addTodo() {
    let todoText = input.value;
    
    let todoLi = document.createElement("li");
    todoLi.addEventListener("click", (e) => {
    e.preventDefault();
    strikethroughText(todoLi);
    });

    todoLi.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    deleteLi(todoLi);
    });


    todoLi.innerHTML = todoText;

    todoUL.appendChild(todoLi);
    cleanInput();
}

function cleanInput() {
    input.value = "";
}

