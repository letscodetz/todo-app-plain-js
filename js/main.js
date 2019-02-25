// creates a todo item
const createToDo = function () {

    // get value typed into todo
    const input = document.getElementById("input-todo");
    const text = input.value;

    // clears the input
    input.value = '';

    // create todo list item contents
    const listItemContents = `<div>${text}</div>
    <button onclick="removeTodo(event)">x</button>`;

    // create todo list item
    const listItem = document.createElement("li");

    // add class attribute to list item element
    listItem.setAttribute("class", "list-item");

    // add todo contents to the list newly created 
    // list item element
    listItem.innerHTML = listItemContents;


    // get the todo list 
    const todoList = document.querySelector("ul");

    // append list item to the todo list
    todoList.appendChild(listItem);
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
}

