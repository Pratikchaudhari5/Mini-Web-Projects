document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.onclick = function() {
    navBar.classList.toggle("active"); // Toggle the "active" class on nav-bar
  };
});
