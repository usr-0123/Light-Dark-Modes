document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector("#dark-mode-toggle");

  // Check user preference for dark mode
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  }

  // Event listener for the toggle switch
  toggleSwitch.addEventListener("change", toggleDarkMode);
});
