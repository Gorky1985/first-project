const genre = document.querySelector(".dropdown-toggle.genre");
const news = document.querySelector(".dropdown-toggle.news");
const about = document.querySelector(".dropdown-toggle.about");
let aria;

const reveal = (e) => {
  e.currentTarget.classList.toggle("toggle-on");
  aria = document.querySelector(".toggle-on");
  let span = e.currentTarget.querySelector("span");

  if (aria) {
    e.currentTarget.setAttribute("aria-expanded", true);
  } else {
    e.currentTarget.setAttribute("aria-expanded", false);
  }
  if (span.textContent === "Expand child menu") {
    span.textContent = "Collapse child menu";
  } else {
    span.textContent = "Expand child menu";
  }
  let sub = e.currentTarget;
  let subMenu = sub.parentElement;
  let toggleSub = subMenu.nextElementSibling;
  toggleSub.classList.toggle("toggled-on");
};

genre.addEventListener("click", reveal);
news.addEventListener("click", reveal);
about.addEventListener("click", reveal);
