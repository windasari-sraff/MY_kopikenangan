// Toggle class 'active' untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class 'active' untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document .querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox .focus();
  e.preventDefaul();
};

// Klik di luar navbar dan hamburger untuk menutup navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
