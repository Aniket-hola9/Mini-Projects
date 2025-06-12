// Sidebar Toggle
document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
