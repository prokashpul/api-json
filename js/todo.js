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
        const article = document.createElement('article');
        article.classList.add('todo');
        article.innerHTML = `
        <h3>${toDo.title}</h3>
        <p> ${toDo.completed} </p>
        `
        todoList.appendChild(article)
    });
}