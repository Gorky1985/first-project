const leftToggle = document.querySelector(".sidebar-left-toggle");
const sidebar = document.querySelector(".sidebar");
const rightToggle = document.querySelector(".sidebar-right-toggle");
const noSidebar = document.querySelector(".no-sidebar-toggle");
const hideSidebar = document.querySelector(".hide-sidebar-toggle");
const content = document.querySelector(".content");

leftToggle.addEventListener("click", () => {
  if (!sidebar.classList.contains("sidebar-left")) {
    sidebar.classList.add("sidebar-left");
  }
});

rightToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar-left")) {
    sidebar.classList.remove("sidebar-left");
  }
});

noSidebar.addEventListener("click", () => {
  if (!content.classList.contains("no-sidebar")) {
    content.classList.add("no-sidebar");
  } else {
    content.classList.remove("no-sidebar");
  }
});

hideSidebar.addEventListener("click", () => {
  if (!sidebar.classList.contains("hide")) {
    sidebar.classList.add("hide");
  } else {
    sidebar.classList.remove("hide");
  }
});
