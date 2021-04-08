// Variables
const toggleButton = document.querySelector(".toggle-btn");
const searchBar = document.querySelector(".search-bar");
const filterIcon = searchBar.querySelector(".fa-filter");

// Functions
function activateDarkMode(e) {
  document.body.classList.toggle("dark_mode");
  const moonIcon = toggleButton.parentElement.querySelector("img");
  /* Toggle button functionality and change moon/sun icon */
  if (!e.target.classList.contains("active")) {
    toggleButton.classList.add("active");
    moonIcon.src = "../images/desktop/icon-sun.svg";
  } else {
    toggleButton.classList.remove("active");
    moonIcon.src = "../images/desktop/icon-moon.svg";
  }
}

function advancedSearch() {
  const box = document.querySelector(".box");
  if (!box.classList.contains("active")) {
    box.classList.add("active");
    box.style.display = "flex";
  } else {
    box.classList.remove("active");
    box.style.display = "";
  }
}

// EventListeners
toggleButton.addEventListener("click", activateDarkMode);
filterIcon.addEventListener("click", advancedSearch);
