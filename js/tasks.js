import { saveData, getData } from './storage.js';

let tasks = getData('focus-flow-tasks');

export function addTask(text) {
  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    completed: false
  });

  saveData('focus-flow-tasks', tasks);
  displayTasks();
}

export function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  saveData('focus-flow-tasks', tasks);
  displayTasks();
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);

  saveData('focus-flow-tasks', tasks);
  displayTasks();
}

export function displayTasks() {
  const container = document.getElementById('tasks-container');
  if (!container) return;

  container.innerHTML = '';

  tasks = getData('focus-flow-tasks');

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'task-card';

    div.innerHTML = `
      <div class="task-left">
        <input type="checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""}>
        <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      </div>
      <button data-id="${task.id}" class="delete-btn">Delete</button>
    `;

    container.appendChild(div);
  });

  container.querySelectorAll('input').forEach(cb => {
    cb.addEventListener('change', () => toggleTask(Number(cb.dataset.id)));
  });

  container.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteTask(Number(btn.dataset.id)));
  });
}