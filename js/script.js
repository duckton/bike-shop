// Mobile Dropdown Menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
})

// Back to top button
const showOnPx = 600;
const backToTopBtn = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopBtn.classList.remove("is-hidden")
  } else {
    backToTopBtn.classList.add("is-hidden")
  }
})
