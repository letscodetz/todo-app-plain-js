let allToDo = [];

const onAddTodo = function () {
    const input = document.getElementById("input-todo");
    const value = input.value;
    allToDo.push(value);
    createToDo(value);
    setCountValue();

    // clears the input
    input.value = '';
}

const OnRemoveTodo = function (e) {
    //  id of todo
    const id = e.target.getAttribute('id');

    // get the list container
    const listContainer = document.getElementsByClassName("list-contents")[0];
    const todoToRemove = document.getElementById(`list-item-${id}`);
    const text = todoToRemove.getElementsByClassName('description')[0].innerHTML;

    // remove todo from the html file
    listContainer.removeChild(todoToRemove);

    //  remove todo entry from array of all todo
    allToDo = allToDo.filter(function(todo) {
        return todo !== text;
    });
    setCountValue();
}

const createToDo = function (text) {
    const currentDate = getCreatedAtDate();
    const id = allToDo.indexOf(text);
    const todo = `
        <div class="description">${text}</div>
        <div class="item-actions">
            <div>${currentDate}</div>
            <button id="${id}">x</button>
        </div>
    `
    // container  for  a todo item
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "list-item");
    itemContainer.setAttribute("id", `list-item-${id}`);
    itemContainer.innerHTML = todo;
    // getting the list container
    const listContainer = document.getElementsByClassName("list-contents")[0];
    listContainer.appendChild(itemContainer);
    document.getElementById(`${id}`).addEventListener('click', OnRemoveTodo);
}

const setCountValue = function () {
    const totalTodos = allToDo.length;
    document.getElementById("total").innerHTML = totalTodos;
}

const getCreatedAtDate = function () {
    const today = new Date();
    return today.toLocaleString();
}

const addTodoEventListener = function () {
    document.getElementById("add-todo").addEventListener("click", onAddTodo);
}


addTodoEventListener();
setCountValue();

