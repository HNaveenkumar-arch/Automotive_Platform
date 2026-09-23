
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});


const header = document.getElementById("header");
const topBar = document.getElementById("topBar");
const closeTopbar = document.getElementById("closeTopbar");
const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.body;


closeTopbar.addEventListener("click", () => {
    topBar.style.display = "none";
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navContent.classList.toggle("active");

    if (navContent.classList.contains("active")) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
});


navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");


        if (window.innerWidth <= 991) {
            hamburger.classList.remove("active");
            navContent.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });
});





window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const body = document.body;


    body.style.overflow = "hidden";


    setTimeout(() => {
        preloader.classList.add("hide-loader");

        body.style.overflow = "auto";
    }, 1000);
});