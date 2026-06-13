
import { addNote, displayNotes } from './notes.js';

import {
  addTask,
  displayTasks
} from './tasks.js';

// NOTES

const noteForm =
  document.getElementById('note-form');

noteForm.addEventListener('submit',
(event) => {

  event.preventDefault();

  const titleInput =
    document.getElementById('note-title');

  const contentInput =
    document.getElementById('note-content');

  addNote(
    titleInput.value,
    contentInput.value
  );

  noteForm.reset();

});

displayNotes();


// TASKS

const taskForm =
  document.getElementById('task-form');

taskForm.addEventListener('submit',
(event) => {

  event.preventDefault();

  const taskInput =
    document.getElementById('task-input');

  addTask(taskInput.value);

  taskForm.reset();

});

displayTasks();