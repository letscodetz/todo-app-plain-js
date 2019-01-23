const allToDo = [];


const getCreatedAtDate = function() {
    const today = new Date();
    return today.toLocaleString();
}

const setCountValue = function() {
    const countElement = document.getElementById("total");
    const totalTodos = allToDo.length;
    countElement.innerHTML = totalTodos;
}
const createToDo = function (text) {
    // button for removing todo
    const removeTodoButton = document.createElement("button");
    removeTodoButton.setAttribute("id", "remove-todo");
    removeTodoButton.innerHTML = "x";
    const id = allToDo.indexOf(text);

    // div for showing date todo was created
    const dateElement = document.createElement("div");
    const createdAt = getCreatedAtDate();
    dateElement.innerHTML =createdAt;

    // todo description text
    const description = document.createElement("div");
    description.setAttribute("class", "description");
    description.innerHTML = text;

    const itemActions = document.createElement("div");
    itemActions.setAttribute("class", "item-actions");
    itemActions.appendChild(dateElement);
    itemActions.appendChild(removeTodoButton);

     // container  for  a todo item
     const itemContainer = document.createElement("div");
     itemContainer.setAttribute("class", "list-item");
     itemContainer.setAttribute("id", id);
     itemContainer.appendChild(description);
     itemContainer.appendChild(itemActions);

     // getting the list container
     const listContainer = document.getElementsByClassName("list-contents")[0];
     listContainer.appendChild(itemContainer);

}

const addToDo = function () {
    const input = document.getElementById("input-todo");
    const value = input.value;
    allToDo.push(value);
    createToDo(value);
    setCountValue();
}

const displayToDos = function (allToDo) {
    allToDo.map(function(todo) {
        createToDo(todo);
    });

    setCountValue();
}

const attachEventListenersToElements = function () {
    const addButton = document.getElementById("add-todo");
    addButton.addEventListener("click", addToDo);
}

displayToDos(allToDo);

attachEventListenersToElements();

