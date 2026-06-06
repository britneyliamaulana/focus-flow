import { saveData, getData } from './storage.js';

let notes = getData('focus-flow-notes');

export function addNote(title, content) {

  const note = {
    id: Date.now(),
    title,
    content
  };

  notes.push(note);

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

  container.innerHTML = '';

  notes.forEach(note => {

    const noteCard = document.createElement('div');

    noteCard.classList.add('note-card');

    noteCard.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button class="delete-btn" data-id="${note.id}">
        Delete
      </button>
    `;

    container.appendChild(noteCard);
  });

  const deleteButtons = document.querySelectorAll('.delete-btn');

  deleteButtons.forEach(button => {

    button.addEventListener('click', () => {

      const id = Number(button.dataset.id);

      deleteNote(id);
    });
  });
}