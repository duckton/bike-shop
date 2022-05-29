// Mobile Dropdown Menu
$("#burger").on("click", function(){
  $("#hamburger-links").slideToggle();
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
