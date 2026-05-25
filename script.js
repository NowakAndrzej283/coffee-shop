// NAVBAR ELEMENT IN MOBILE QUERY
const headerEl = document.querySelector("header");
console.log(headerEl);

headerEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

// YEAR IN THE FOOTER
const yearEl = document.querySelector(".year");

const actualYear = new Date().getFullYear();
yearEl.textContent = actualYear;
