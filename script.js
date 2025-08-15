// Set the current year in the footer so you don't have to update it manually.
const yearSpan = document.getElementById('year');
if (yearSpan) {
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
}

// Sanity check: open your browser console (right‑click → Inspect → Console)
// You should see this message when the page loads.
console.log('✅ My first website is running!');