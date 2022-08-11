// Handle burger menu
const burgerMenu = document.getElementById("hamburger");
const sideMenu = document.getElementById("menu");
const navLinks = document.getElementsByClassName("navbar-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    sideMenu.classList.remove("show-menu");
  });
}

const handleShowMenuToggle = () => {
  sideMenu.classList.toggle("show-menu");
};

burgerMenu.addEventListener("click", handleShowMenuToggle);

window.onresize = () => sideMenu.classList.remove("show-menu");

// Fade ins between title and header
const introTitle = document.getElementById("intro-container");
const sideTitle = document.getElementById("logo");
let firstScroll = true;

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    introTitle.classList.remove("fade-in-class-intro");
    introTitle.classList.add("fade-out-class-intro");
    sideTitle.classList.remove("fade-out-class-side");
    sideTitle.classList.add("fade-in-class-side");
    firstScroll = false;
  }
  if (window.scrollY < 50) {
    introTitle.classList.remove("fade-out-class-intro");
    introTitle.classList.add("fade-in-class-intro");
    sideTitle.classList.remove("fade-in-class-side");
    if (!firstScroll) {
      sideTitle.classList.add("fade-out-class-side");
    }
  }
});

// Handle change theme
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const rootElement = document.documentElement;

rootElement.className = localStorage.getItem("currentTheme")
  ? localStorage.getItem("currentTheme")
  : "dark-theme";

function setTheme() {
  const newTheme =
    rootElement.className === "light-theme" ? "dark-theme" : "light-theme";
  rootElement.className = newTheme;
  saveThemetoLocalStorage();
}

function saveThemetoLocalStorage() {
  localStorage.setItem("currentTheme", rootElement.className);
}

themeToggleBtn.addEventListener("click", setTheme);
