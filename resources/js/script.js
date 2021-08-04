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

const removeTask = (fromWhereToRemove, textValue) => {
    for (let index in allTaskList) {
        if (allTaskList[index] == whereToDisply) {
            const currentType = listType[index];
            currentList = document.querySelectorAll(currentType);
            for (let list of currentList) {
                console.log(list);
                list.addEventListener("click", function(){
                    list.style.display = "none";
                });
            }
        }
    }
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

newTaskBtn.addEventListener("click", function(){
    showForm();
});

addBtn.addEventListener("click", function() {
    getTask();
    clearForm();
    hideForm();
});



// ---alert---
const alertNote = document.querySelector(".alert");
const alertCloseBtn = document.querySelector(".alertclosebtn");

alertCloseBtn.addEventListener("click", function() {
    alertNote.classList.toggle("scaleout");
    setTimeout(function() {
        alertNote.style.display = "none";
    }, 200);
})