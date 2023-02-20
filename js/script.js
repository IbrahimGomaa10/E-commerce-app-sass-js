const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar ul");
const links = document.querySelectorAll(".navbar ul li a");
const cartBag = document.querySelector(".navbar .cartBag");
const elePlace = document.querySelectorAll("input[placeholder]");
let path = window.location.href;

if (toggleBtn) {
  toggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("active")
  });
};

links.forEach(function(link){
  if(link.href === path) {
    link.className = "active";
  }
});

