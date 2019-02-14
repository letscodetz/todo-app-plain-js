// stores all todo in array
let allToDo = [];


// displays added todo
const displayAddedTodo = function () {

    // get value typed into todo
    const input = document.getElementById("input-todo");
    const value = input.value;

    //update array of todo
    allToDo.push(value);

    // create new todo based on 
    // value obtained from input
    createToDo(value);

    // update total todo count
    setCountValue();

    // clears the input
    input.value = '';
}


// removes todo on click x button
const OnRemoveTodo = function (e) {

    //  get id of clicked todo
    const id = e.target.getAttribute('id');

    // get the list container
    const listContainer = document.getElementsByClassName("list-contents")[0];

    // get todo item to remove
    const todoToRemove = document.getElementById(`list-item-${id}`);
    const text = todoToRemove.getElementsByClassName('description')[0].innerHTML;

    // remove todo from the list
    listContainer.removeChild(todoToRemove);

    //  remove todo from array of all todo
    allToDo = allToDo.filter(function (todo) {
        return todo !== text;
    });

    // update the total count of todo
    setCountValue();
}

const createToDo = function (text) {
    
    // get created at date of thetodo
    const currentDate = getCreatedAtDate();

    // get id of the todo from array of todo
    const id = allToDo.indexOf(text);

    // generate contents for todo item
    const todo = `
        <div class="description">${text}</div>
        <div class="item-actions">
            <div>${currentDate}</div>
            <button id="${id}">x</button>
        </div>
    `

    // create container for a todo item
    const itemContainer = document.createElement("div");

    // add class and id attributes to the 
    // container for todo
    itemContainer.setAttribute("class", "list-item");
    itemContainer.setAttribute("id", `list-item-${id}`);

    // add todo contents to the container
    itemContainer.innerHTML = todo;

    // get the todo list container
    const listContainer = document.getElementsByClassName("list-contents")[0];

    // add new todo to the list of todo
    listContainer.appendChild(itemContainer);

    // attach event listener for removing this todo
    document.getElementById(`${id}`).addEventListener('click', OnRemoveTodo);
}


// display total count of the todo
const setCountValue = function () {
    const totalTodos = allToDo.length;
    document.getElementById("total").innerHTML = totalTodos;
}

// generate current date
const getCreatedAtDate = function () {
    const today = new Date();

    // makes date human readable
    return today.toLocaleString();
}

// add event listener for adding new todo
const addTodoEventListener = function () {
    document.getElementById("add-todo").addEventListener("click", displayAddedTodo);
}


// initializing todo
addTodoEventListener();
setCountValue();

