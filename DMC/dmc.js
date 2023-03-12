const hamburger = document.querySelector(".hamburger");
const navMenu =  document.querySelector(".nav-ul");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
navMenu.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

