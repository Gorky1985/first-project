// Open and close sidebar
let nav = document.querySelector(".menu-section");
let menuIcon = document.querySelector(".menu-icon");
let closeN = document.querySelector(".close-nav");

function openNav() {
  nav.classList.toggle("reveal");
  menuIcon.classList.toggle("unreveal");
  let view = document.querySelector("#multi-level-nav");
  view.scrollIntoView();
  closeN.classList.toggle("revealInline");
}

function closeNav() {
  nav.classList.toggle("reveal");
  menuIcon.classList.toggle("unreveal");
  closeN.classList.toggle("revealInline");
}
