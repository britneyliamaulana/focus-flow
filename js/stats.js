export function updateStats() {

  const tasks =
    JSON.parse(
      localStorage.getItem('focus-flow-tasks')
    ) || [];

  const total = tasks.length;

  const completed = tasks.filter(
    task => task.completed
  ).length;

  const remaining = total - completed;

  const completionRate =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const totalEl =
    document.getElementById('total-tasks');

  const completedEl =
    document.getElementById('completed-tasks');

  const remainingEl =
    document.getElementById('remaining-tasks');

  const rateEl =
    document.getElementById('completion-rate');

  if (totalEl) totalEl.textContent = total;
  if (completedEl) completedEl.textContent = completed;
  if (remainingEl) remainingEl.textContent = remaining;
  if (rateEl) rateEl.textContent = completionRate + "%";
}