function get_todos() {
    let todos = [];
    const todos_str = localStorage.getItem('todos');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    const task = document.getElementById('task').value;
    if (task.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const todos = get_todos();
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();
}

function remove() {
    const id = this.getAttribute('id');
    const todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    show();
}

function show() {
    const todos = get_todos();
    let html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += `<li>${todos[i]} <button class="remove" id="${i}">Delete</button></li>`;
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

document.getElementById('add').addEventListener('click', add);
show();
