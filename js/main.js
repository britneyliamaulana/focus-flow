import { loadQuote } from './api/quotes.js';
import { addNote, displayNotes } from './notes.js';
import { updateStats } from './stats.js';
import {
  addTask,
  displayTasks
} from './tasks.js';

import {
  startTimer,
  pauseTimer,
  resetTimer
} from './timer.js';

import {
  initializeTheme,
  toggleTheme
} from './theme.js';


import('./api/worldtimer.js')
  .then(module => {
    module.loadWorldTime(); // 👈 call it HERE safely
  })
  .catch(err => {
    console.error("WorldTime failed to load:", err);
  });

// RUN AFTER DOM IS READY
document.addEventListener('DOMContentLoaded', () => {

  // -------------------
  // NOTES
  // -------------------

  const noteForm = document.getElementById('note-form');

  if (noteForm) {
    noteForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const titleInput = document.getElementById('note-title');
      const contentInput = document.getElementById('note-content');

      addNote(titleInput.value, contentInput.value);

      noteForm.reset();
    });
  }

  displayNotes();


  // -------------------
// TASKS
// -------------------

const taskForm =
  document.getElementById(
    'task-form'
  );

if (taskForm) {

  taskForm.addEventListener(
    'submit',
    (event) => {

      event.preventDefault();

      const taskInput =
        document.getElementById(
          'task-input'
        );

      addTask(
        taskInput.value
      );
      displayTasks();
      updateStats();

    }
  );

}

displayTasks();


  // -------------------
  // TIMER
  // -------------------

  const startBtn = document.getElementById('start-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resetBtn = document.getElementById('reset-btn');

  if (startBtn) startBtn.addEventListener('click', startTimer);
  if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetTimer);


  // -------------------
  // THEME
  // -------------------

  initializeTheme();

  const hamburgerBtn =
  document.getElementById('hamburger-btn');

const navMenu =
  document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

const links = document.querySelectorAll('[data-target]');
const sections = document.querySelectorAll('.page-section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    sections.forEach(s => s.style.display = 'none');

    const target = document.getElementById(link.dataset.target);
    if (target) target.style.display = 'block';

    document.getElementById('nav-menu')?.classList.remove('active');
  });
});

// default view
document.getElementById('dashboard-section').style.display = 'block';

  const themeBtn = document.getElementById('theme-toggle');

  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  
  console.log("Calling quote loader...");
   loadQuote();
   updateStats();
  console.log("Focus Flow initialized ✔");

});