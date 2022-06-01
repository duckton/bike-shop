// Mobile Dropdown Menu
$("#burger").on("click", function() {
  $("#hamburger-links").slideToggle();
})

$(window).on("resize", function() {
  $("#hamburger-links").slideUp();
})

// Back to top button

$(window).on("scroll", function(){
  // console.log(this.scrollY);
  if (this.scrollY > 275){
    $(".back-to-top").removeClass("is-hidden");
  } else {
    $(".back-to-top").addClass("is-hidden");
  }
})

$(".back-to-top").on('click', function(e) {
  e.preventDefault();
  $(".back-to-top").addClass("is-hidden");
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});
