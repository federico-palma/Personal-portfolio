// Handle burger menu
const burgerMenu = document.getElementById("hamburger");
const navLinks = document.getElementsByClassName("nav-links")[0];
const navLinksList = document.getElementsByClassName("navbar-link");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
});

for (let i = 0; i < navLinksList.length; i++) {
  navLinksList[i].addEventListener("click", () => {
    navLinks.classList.remove("show-menu");
  });
}
