// Variables
const toggleButton = document.querySelector(".toggle-btn");

// Functions
function activateDarkMode(e) {
  const moonIcon = toggleButton.parentElement.querySelector("img");
  /* Toggle button functionality and change moon/sun icon */
  if (!e.target.classList.contains("active")) {
    toggleButton.classList.add("active");
    moonIcon.src = "../images/desktop/icon-sun.svg";
    document.body.style.background = "black";
  } else {
    toggleButton.classList.remove("active");
    moonIcon.src = "../images/desktop/icon-moon.svg";
    document.body.style.background = "";
  }
}

// EventListeners
toggleButton.addEventListener("click", activateDarkMode);
