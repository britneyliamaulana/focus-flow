export async function loadQuote() {

  const container =
    document.getElementById(
      'quote-container'
    );

  if (!container) return;

  try {

    const response =
      await fetch(
        'https://dummyjson.com/quotes/random'
      );

    const data =
      await response.json();

    container.innerHTML = `
      <blockquote>
        "${data.quote}"
      </blockquote>

      <p>
        — ${data.author}
      </p>
    `;

  } catch (error) {

    console.error(error);

    container.innerHTML =
      'Failed to load quote.';
  }
}