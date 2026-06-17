export function initializeTheme() {

  const savedTheme =
    localStorage.getItem('focus-flow-theme');

  if (savedTheme === 'dark') {

    document.body.classList.add(
      'dark-theme'
    );

    updateButtonText();
  }
}

export function toggleTheme() {

  document.body.classList.toggle(
    'dark-theme'
  );

  const isDark =
    document.body.classList.contains(
      'dark-theme'
    );

    console.log("Theme clicked");
    
  localStorage.setItem(
    'focus-flow-theme',
    isDark ? 'dark' : 'light'
  );

  updateButtonText();
}

function updateButtonText() {

  const button =
    document.getElementById(
      'theme-toggle'
    );

  if (!button) return;

  button.textContent =
    document.body.classList.contains(
      'dark-theme'
    )
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
}