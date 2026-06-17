import { saveData, getData } from './storage.js';

let notes = getData('focus-flow-notes');

export function addNote(title, content) {
  if (!title || !content) return;

  notes.push({
    id: Date.now(),
    title,
    content
  });

  saveData('focus-flow-notes', notes);
  displayNotes();
}

export function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);

  saveData('focus-flow-notes', notes);
  displayNotes();
}

export function displayNotes() {
  const container = document.getElementById('notes-container');
  if (!container) return;

  container.innerHTML = '';

  notes = getData('focus-flow-notes');

  notes.forEach(note => {
    const div = document.createElement('div');
    div.className = 'note-card';

    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button data-id="${note.id}" class="delete-btn">Delete</button>
    `;

    container.appendChild(div);
  });

  container.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteNote(Number(btn.dataset.id)));
  });
}