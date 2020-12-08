function menuMobile() {
  if (!isOpen) {
    document.querySelector(".nav-hamburguer").classList.add("close-menu");
    document.querySelector(".close-menu").classList.remove("nav-hamburguer");
    document.querySelector(".menu-mobile").classList.add("menu-mobile-isOpen");

    navButton.src = "images/icon-close.svg";
    isOpen = true;
  } else {
    document.querySelector(".close-menu").classList.add("nav-hamburguer");
    document.querySelector(".nav-hamburguer").classList.remove("close-menu");
    document
      .querySelector(".menu-mobile")
      .classList.remove("menu-mobile-isOpen");

    navButton.src = "images/icon-hamburger.svg";
    isOpen = false;
  }
}

let navButton = document.getElementById("nav-button");
let isOpen = false;

navButton.addEventListener("click", (e) => {
  e.preventDefault();

  menuMobile();
  
});
