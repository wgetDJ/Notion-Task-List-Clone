const newTaskBtn = document.querySelector(".new-task");
const todo = document.querySelector(".todo");
const doing = document.querySelector(".todo");
const done = document.querySelector(".todo");
const newTask = document.querySelector("#task");
const addBtn = document.querySelector(".addItem");
const inputForm = document.querySelector(".inputItem");
// const deleteBtn = document.querySelector(".closebtn");

let todoTask = [];
let doingTask = [];
let doneTask = [];
const allTaskList = [".todo-list", ".doing-list", ".done-list"];
const listType = ["all-todo", "all-doing", "all-done"];


const showForm = () => {
    inputForm.style.display = "block";
}

const hideForm = () => {
    inputForm.style.display = "none";
}

const displyTask = (whereToDisply, textValue) => {

    const ul = document.querySelector(whereToDisply);

    const li = document.createElement("li");
    for (let index in allTaskList) {
        if (allTaskList[index] == whereToDisply) {
            const currentType = listType[index];
            li.classList.add("item", currentType);
        }
    }

    li.draggable ="true";

    const listText = document.createTextNode(textValue);
    li.appendChild(listText);

    const span = document.createElement("span");
    span.classList.add("closebtn");
    span.title = "Delete";
    const closeX = document.createTextNode("\u00D7");
    span.appendChild(closeX);

    li.appendChild(span);

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

const clearForm = () => {
    newTask.value = "";
}

const getTask = () => {
    let newTaskText = newTask.value;
    addTaskToTaskList(todoTask, newTaskText);
}

newTaskBtn.addEventListener("click", () => {
    showForm();
});

addBtn.addEventListener("click", () => {
    getTask();
    clearForm();
    hideForm();
});

newTask.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        getTask();
        clearForm();
        hideForm();
    }
});

// ---drag and drop---
let lists = document.querySelectorAll(".item").async;
// console.log(lists);




// ---alert---
const alertNote = document.querySelector(".alert");
const alertCloseBtn = document.querySelector(".alertclosebtn");

alertCloseBtn.addEventListener("click", () => {
    alertNote.classList.toggle("scaleout");
    setTimeout(function() {
        alertNote.style.display = "none";
    }, 200);
})