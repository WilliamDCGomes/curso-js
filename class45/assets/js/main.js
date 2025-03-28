const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

let createLi = () => document.createElement('li');

inputTask.addEventListener('keypress', (e) => e.keyCode === 13 ? addTask() : null);

btnTask.addEventListener('click', addTask);

document.addEventListener('click', (e) => removeTask(e.target));

function createTask(input) {
    const li = createLi();
    li.innerText = input;
    tasks.appendChild(li);
    createDeleteButton(li);
    saveTask(li);
}

function addTask() {
    if(!inputTask.value) return;

    createTask(inputTask.value);
    inputTask.value = '';
    inputTask.focus();
}

function removeTask(target) {
    if(target.classList.contains('delete')) {
        let result = confirm('Are you sure you want to remove this item?');
        if(result) {
            target.parentElement.remove();
            saveTask();
        }
    }
    inputTask.focus();
}

function createDeleteButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('title', 'Delete this task');
    li.appendChild(deleteButton);
}

function saveTask() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for(let task of liTasks) {
        let textTask = task.innerText.replace(' Delete', '');
        tasksList.push(textTask);
    }

    localStorage.setItem('tasks', JSON.stringify(tasksList));
}

function loadOldTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    for(let task of tasks) {
        createTask(task);
    }
}

loadOldTasks();
inputTask.focus();