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

// Fade ins between title and header
const introTitle = document.getElementsByClassName("intro-container")[0];
const headerTitle = document.getElementById("logo");
let firstScroll = true;

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    introTitle.classList.remove("fade-in-class");
    introTitle.classList.add("fade-out-class");
    headerTitle.classList.remove("fade-out-class");
    headerTitle.classList.add("fade-in-class");
    firstScroll = false;
  }
  if (window.scrollY < 50) {
    introTitle.classList.remove("fade-out-class");
    introTitle.classList.add("fade-in-class");
    headerTitle.classList.remove("fade-in-class");
    if (!firstScroll) {
      headerTitle.classList.add("fade-out-class");
    }
  }
});

// Handle change theme
const changeThemeBtn = document.getElementById("theme-toggle-btn");
const rootElement = document.documentElement;

rootElement.className = "light-theme";

function setTheme() {
  const newTheme =
    rootElement.className === "light-theme" ? "dark-theme" : "light-theme";
  rootElement.className = newTheme;
}

changeThemeBtn.addEventListener("click", setTheme);
