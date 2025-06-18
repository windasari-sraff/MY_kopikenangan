// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
const hm = document.querySelector("#hamburger-menu");
.onclick = () => {
 navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");


// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button");
.onclick = (e) => {

  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click" ,function  (e) {
if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
if (!hm.contains (e.target) && !navbarNav.contains(e.target)) {

navbarNav.classList.remove("active");}
if (!sb.contains(e.target) &&
!searchForm.contains(e.target)) {
searchForm.classList.remove("active");
}
});


// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const sc = document.querySelector("#shopping-cart-button");

sc.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

/
