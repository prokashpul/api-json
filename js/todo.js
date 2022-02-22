// api connect

function loadToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => getToDo(data))
}
loadToDo()

function getToDo(toDoDisplay) {
    const todoList = document.getElementById('todo');
    toDoDisplay.map(toDo => {
        console.log(toDo.title)
    });
}