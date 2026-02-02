(() => {
  const dateEl = document.getElementById("weddingDateText");
  const outEl = document.getElementById("ddayText");
  if (!dateEl || !outEl) return;

  const s = dateEl.dataset.weddingDate; // "YYYY-MM-DD"
  if (!s) return;

  const [y, m, d] = s.split("-").map(Number);
  const eventUTC = Date.UTC(y, m - 1, d);

  const now = new Date();
  const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  const diffDays = Math.round((eventUTC - todayUTC) / 86400000);
  outEl.textContent = diffDays >= 0 ? `D-${diffDays}` : `D+${Math.abs(diffDays)}`;
})();
