let nav = document.querySelector(".menu-section"),
  menuIcon = document.querySelector(".menu-icon"),
  closeN = document.querySelector(".close-nav");
function openNav() {
  nav.classList.toggle("reveal"),
    menuIcon.classList.toggle("unreveal"),
    document.querySelector("#multi-level-nav").scrollIntoView(),
    closeN.classList.toggle("revealInline");
}
function closeNav() {
  nav.classList.toggle("reveal"),
    menuIcon.classList.toggle("unreveal"),
    closeN.classList.toggle("revealInline");
}
const genre = document.querySelector(".dropdown-toggle.genre"),
  news = document.querySelector(".dropdown-toggle.news"),
  about = document.querySelector(".dropdown-toggle.about");
let aria;
const reveal = (e) => {
  e.currentTarget.classList.toggle("toggle-on"),
    (aria = document.querySelector(".toggle-on"));
  let t = e.currentTarget.querySelector("span");
  aria
    ? e.currentTarget.setAttribute("aria-expanded", !0)
    : e.currentTarget.setAttribute("aria-expanded", !1),
    "Expand child menu" === t.textContent
      ? (t.textContent = "Collapse child menu")
      : (t.textContent = "Expand child menu"),
    e.currentTarget.parentElement.nextElementSibling.classList.toggle(
      "toggled-on"
    );
};
genre.addEventListener("click", reveal),
  news.addEventListener("click", reveal),
  about.addEventListener("click", reveal);
const leftToggle = document.querySelector(".sidebar-left-toggle"),
  sidebar = document.querySelector(".sidebar"),
  rightToggle = document.querySelector(".sidebar-right-toggle"),
  noSidebar = document.querySelector(".no-sidebar-toggle"),
  hideSidebar = document.querySelector(".hide-sidebar-toggle"),
  content = document.querySelector(".content");
leftToggle.addEventListener("click", () => {
  sidebar.classList.contains("sidebar-left") ||
    sidebar.classList.add("sidebar-left");
}),
  rightToggle.addEventListener("click", () => {
    sidebar.classList.contains("sidebar-left") &&
      sidebar.classList.remove("sidebar-left");
  }),
  noSidebar.addEventListener("click", () => {
    content.classList.contains("no-sidebar")
      ? content.classList.remove("no-sidebar")
      : content.classList.add("no-sidebar");
  }),
  hideSidebar.addEventListener("click", () => {
    sidebar.classList.contains("hide")
      ? sidebar.classList.remove("hide")
      : sidebar.classList.add("hide");
  });
