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
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const rootElement = document.documentElement;

rootElement.className = localStorage.getItem("currentTheme")
  ? localStorage.getItem("currentTheme")
  : "light-theme";

function setTheme() {
  const newTheme =
    rootElement.className === "light-theme" ? "dark-theme" : "light-theme";
  rootElement.className = newTheme;
  saveThemetoLocalStorage();
}

themeToggleBtn.addEventListener("click", setTheme);

function saveThemetoLocalStorage() {
  localStorage.setItem("currentTheme", rootElement.className);
}
