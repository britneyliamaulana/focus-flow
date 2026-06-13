import { saveData, getData } from './storage.js';

let tasks = getData('focus-flow-tasks');

export function addTask(text) {

  const task = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(task);

  saveData('focus-flow-tasks', tasks);

  displayTasks();
}

export function toggleTask(id) {

  tasks = tasks.map(task => {

    if (task.id === id) {
      task.completed = !task.completed;
    }

    return task;
  });

  saveData('focus-flow-tasks', tasks);

  displayTasks();
}

export function deleteTask(id) {

  tasks = tasks.filter(task => task.id !== id);

  saveData('focus-flow-tasks', tasks);

  displayTasks();
}

export function displayTasks() {

  const container =
    document.getElementById('tasks-container');

  container.innerHTML = '';

  tasks.forEach(task => {

    const taskCard = document.createElement('div');

    taskCard.classList.add('task-card');

    taskCard.innerHTML = `
      <div class="task-left">

        <input
          type="checkbox"
          class="task-check"
          data-id="${task.id}"
          ${task.completed ? 'checked' : ''}
        >

        <span class="${task.completed ? 'completed' : ''}">
          ${task.text}
        </span>

      </div>

      <button
        class="delete-btn"
        data-id="${task.id}">
        Delete
      </button>
    `;

    container.appendChild(taskCard);
  });

  document.querySelectorAll('.task-check')
    .forEach(box => {

      box.addEventListener('change', () => {

        toggleTask(
          Number(box.dataset.id)
        );

      });

    });

  document.querySelectorAll('.delete-btn')
    .forEach(button => {

      button.addEventListener('click', () => {

        deleteTask(
          Number(button.dataset.id)
        );

      });

    });
}