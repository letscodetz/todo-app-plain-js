// stores all todo in array
let allToDo = [];

// removes todo event listener
// receives the id of remove todo button
removeTodoEventLister = function (id) {
    document.getElementById(id).addEventListener('click',removeTodo);
}

// adds event listener for adding new todo
const addTodoEventListener = function () {
    document.getElementById("add-todo").addEventListener("click", createToDo);
}

const getClickedTodoListItem = function(id) {
    removeTodoButton = document.getElementById(id);
    listItem = removeTodoButton.parentElement;
    return listItem;
}

const removeTodoTextFromArray = function(text) {
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

const createTodoListItem = function (text, id) {
    // create todo item description
    const itemDescription = document.createElement("div");
    itemDescription.innerHTML = text;

    // create remove todo button
    const removeTodoButton = document.createElement("button");

    // assign todo id to the remove todo button
    removeTodoButton.setAttribute("id", id);
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



const createToDo = function () {

    // get the text typed by user and id of todo
    const todoContents = getTodoContents();
    const text = todoContents.description;
    const id = todoContents.todoId;

    // create todo list item
    const listItem = createTodoListItem(text, id);

    // get the todo list 
    const todoList = document.querySelector("ul");

    // append list item to the todo list
    todoList.appendChild(listItem);

    // attach event listener for removing todo
    removeTodoEventLister(id);
}



// removes todo on click x button
const removeTodo = function (e) {

    //  get id of clicked todo
    const id = e.target.getAttribute('id');

    // get todo list item
    const listItemToRemove = getClickedTodoListItem(id);

    // get the list container
    const todoList = document.querySelector("ul");

   
    const text = listItemToRemove.querySelector('div').innerHTML;

    // remove todo from the list
    todoList.removeChild(listItemToRemove);

    //  remove todo from array of all todo
    removeTodoTextFromArray(text);
}

// initializing todo
addTodoEventListener();

