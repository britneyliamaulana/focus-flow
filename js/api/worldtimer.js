export async function loadWorldTime() {

  const container = document.getElementById('worldtime-container');
  if (!container) return;

  const timezones = [
    "Africa/Johannesburg",
    "Europe/London",
    "America/New_York",
    "Asia/Tokyo"
  ];

  container.innerHTML = "Loading time zones...";

  try {

    const results = await Promise.allSettled(
      timezones.map(async (zone) => {

        const res = await fetch(
          `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`
        );

        if (!res.ok) throw new Error("Fetch failed");

        return await res.json();
      })
    );

    container.innerHTML = "";

    results.forEach(result => {

      if (result.status !== "fulfilled") return;

      const data = result.value;

      const div = document.createElement("div");
      div.className = "worldtime-item";

      div.innerHTML = `
        <span>${data.timeZone.split('/')[1]}</span>
        <strong>${data.time}</strong>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error(error);
    container.innerHTML = "Failed to load time data.";
  }
}