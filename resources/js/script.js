const newTaskBtn = document.querySelector(".new-task");
const todo = document.querySelector(".todo");
const doing = document.querySelector(".todo");
const done = document.querySelector(".todo");
const newTask = document.querySelector("#task");
const addBtn = document.querySelector(".addItem");
const inputForm = document.querySelector(".inputItem");

let todoTask = [];
let doingTask = [];
let doneTask = [];

const showForm = () => {
    inputForm.style.display = "block";
}

const hideForm = () => {
    inputForm.style.display = "none";
}

const displyTask = (whereToDisply, textValue) => {

    const ul = document.querySelector(whereToDisply);

    const li = document.createElement("li");
    li.classList.add("item");
    const listText = document.createTextNode(textValue);
    li.appendChild(listText);

    ul.appendChild(li);
}

const addTaskToTaskList = (list, value) => {
    list.push(value);
    if (list == todoTask) {
        displyTask(".todo-list", value);
    } else if (task == doingTask) {
        displyTask(".doing-list", value);
    } else {
        displyTask(".done-list", value);
    }
}

const getTask = () => {
    let newTaskText = newTask.value;
    addTaskToTaskList(todoTask, newTaskText);
}

newTaskBtn.addEventListener("click", function(){
    showForm();
});

addBtn.addEventListener("click", function() {
    getTask();
    hideForm();
})
