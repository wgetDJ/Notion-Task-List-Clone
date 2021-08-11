const newTaskBtn = document.querySelector(".new-task");
const todo = document.querySelector(".todo");
const doing = document.querySelector(".todo");
const done = document.querySelector(".todo");
const newTask = document.querySelector("#task");
const addBtn = document.querySelector(".addItem");
const inputForm = document.querySelector(".inputItem");
let todoLists = document.querySelector(".todo-list");
let doingLists = document.querySelector(".doing-list");
let doneLists = document.querySelector(".done-list");
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
const deleteTask = (e) => {
    const item = e.target;
    if (item.classList[0] === "closebtn") {
        item.parentElement.remove();
    }
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

todoLists.addEventListener("click", deleteTask);
doingLists.addEventListener("click", deleteTask);
doneLists.addEventListener("click", deleteTask);

// ---delete task---
// lists.addEventListener("click", (e) => {
//     console.log(e.target);
//     const item = e.target;
//     if (item.classList[0] === "closebtn") {
//         item.parentElement.remove();
//     }
// })



// ---alert---
const alertNote = document.querySelector(".alert");
const alertCloseBtn = document.querySelector(".alertclosebtn");

alertCloseBtn.addEventListener("click", () => {
    alertNote.classList.toggle("scaleout");
    setTimeout(function() {
        alertNote.style.display = "none";
    }, 200);
})