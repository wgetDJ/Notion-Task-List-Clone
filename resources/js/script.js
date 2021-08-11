const newTaskBtn = document.querySelector(".new-task");
const todo = document.querySelector(".todo");
const doing = document.querySelector(".todo");
const done = document.querySelector(".todo");
const newTask = document.querySelector("#task");
const addBtn = document.querySelector(".addItem");
const inputForm = document.querySelector(".inputItem");
const allLists = document.querySelectorAll(".lists");
let todoLists = document.querySelector(".todo-list");
let doingLists = document.querySelector(".doing-list");
let doneLists = document.querySelector(".done-list");
const alertNote = document.querySelector(".alert");
const alertCloseBtn = document.querySelector(".alertclosebtn");

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

const clearForm = () => {
    newTask.value = "";
}

const displyTask = (whereToDisply, textValue) => {

    const ul = document.querySelector(whereToDisply);

    const li = document.createElement("li");
    for (let index in allTaskList) {
        if (allTaskList[index] == whereToDisply) {
            const currentType = listType[index];
            li.classList.add("item", currentType);
            li.setAttribute("id", "listdata");
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

const dragTask = (e) => {
    const item = e.target;
    e.dataTransfer.setData("/textplain", item.id);
    for (const dropZone of allLists) {

        dropZone.addEventListener("dragover", e => {
            e.preventDefault();
            console.log("decode");
        });

        dropZone.addEventListener("drop", e => {
            e.preventDefault();
            const droppedElementId = e.dataTransfer.getData("/textplain");
            console.log(droppedElementId);
            const droppedElement = document.getElementById(droppedElementId);

            dropZone.appendChild(droppedElement);
        });
    }
};

newTaskBtn.addEventListener("click", () => {
    showForm();
});

addBtn.addEventListener("click", () => {
    let inputValue = newTask.value;
    console.log(inputValue);
    if (inputValue === "") {
        alert("Please enter a task!");
    } else {
        getTask();
        clearForm();
        hideForm();
    }
});

newTask.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        getTask();
        clearForm();
        hideForm();
    }
});


// ---deleteing tasks---
todoLists.addEventListener("click", deleteTask);
doingLists.addEventListener("click", deleteTask);
doneLists.addEventListener("click", deleteTask);

// ---drag and drop---
todoLists.addEventListener("dragstart", dragTask);
doingLists.addEventListener("dragstart", dragTask);
doneLists.addEventListener("dragstart", dragTask);

// ---alert close---
alertCloseBtn.addEventListener("click", () => {
    alertNote.classList.toggle("scaleout");
    setTimeout(function() {
        alertNote.style.display = "none";
    }, 200);
})