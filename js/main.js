// stores all todo in array
let allToDo = [];

// removes todo event listener
// receives the id of remove todo button
addClickEventListenerToRemoveTodoButton = function (index) {
    const removeTodoButton = document.getElementById(index);
    removeTodoButton.addEventListener('click', removeTodo);
}

// adds event listener for adding new todo
const addTodoEventListener = function () {
    const plusButton = document.getElementById("add-todo");
    plusButton.addEventListener("click", createToDo);
}

const removeTodoTextFromArray = function (text) {
    allToDo = allToDo.filter(function (todo) {
        return todo !== text;
    });
}

const getTodoContents = function () {

    // get value typed into todo
    const input = document.getElementById("input-todo");
    const text = input.value;
    // clears the input
    input.value = '';
    allToDo.push(text);
    const id = allToDo.indexOf(text);
    const todoContents = { description: text, todoId: id };

    return todoContents;
}

const createTodoListItem = function (text, index) {
    // create todo item description
    const itemDescription = document.createElement("div");
    itemDescription.innerHTML = text;

    // create remove todo button
    const removeTodoButton = document.createElement("button");

    // assign todo id to the remove todo button
    removeTodoButton.setAttribute("id", index);
    removeTodoButton.innerHTML = 'x';

    // create todo list item
    const listItem = document.createElement("li");

    // add class  attribute to the 
    // todo list item
    listItem.setAttribute("class", "list-item");

    // append todo description and remove todo button
    // to todo list item
    listItem.appendChild(itemDescription);
    listItem.appendChild(removeTodoButton);

    return listItem;
}


// creates a todo item
const createToDo = function () {

    // get the text typed by user and index of todo
    const todoContents = getTodoContents(); // returns that text and id of the you typed
    const text = todoContents.description;
    const index = todoContents.todoId;

    // create todo list item
    const listItem = createTodoListItem(text, index);

    // get the todo list 
    const todoList = document.querySelector("ul");

    // append list item to the todo list
    todoList.appendChild(listItem);

    // attach event listener for removing todo
    addClickEventListenerToRemoveTodoButton(index);
}



// removes todo on click x button
const removeTodo = function (event) {

    //  get id of clicked todo
    const targetedButton = event.target;

    // get todo list item
    const listItemToRemove = targetedButton.parentElement;

    // get the list container
    const todoList = document.querySelector("ul");

    // remove todo from the list
    todoList.removeChild(listItemToRemove);


    const divForText = listItemToRemove.querySelector('div');
    const text = divForText.innerHTML;


    //  remove todo from array of all todo
    removeTodoTextFromArray(text);
}

// initializing todo
addTodoEventListener();

