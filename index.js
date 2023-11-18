//slider
const sliderImgs = document.querySelectorAll(".slider__img");
const sliderText = document.querySelectorAll(".slider__text-content");
const btnLeft = document.querySelector(".btn__arrow-left");
const btnRight = document.querySelector(".btn__arrow-right");

const nextSlide = () => {
    const currentSlideImg = document.querySelector(".active-photo");
    const currentSlideText = document.querySelector(".active-text");

    currentSlideText.classList.remove("active-text");
    currentSlideImg.classList.remove("active-photo");

    if (currentSlideImg.nextElementSibling && currentSlideImg.nextElementSibling.classList.contains("slider__img")) {
        currentSlideImg.nextElementSibling.classList.add("active-photo");
        currentSlideText.nextElementSibling.classList.add("active-text");
    } else {
        sliderImgs[0].classList.add("active-photo");
        sliderText[0].classList.add("active-text");
    }
};

const prevSlide = () => {
    const currentSlideImg = document.querySelector(".active-photo");
    const currentSlideText = document.querySelector(".active-text");

    currentSlideText.classList.remove("active-text");
    currentSlideImg.classList.remove("active-photo");

    if (currentSlideImg.previousElementSibling && currentSlideImg.previousElementSibling.classList.contains("slider__img")) {
        currentSlideImg.previousElementSibling.classList.add("active-photo");
        currentSlideText.previousElementSibling.classList.add("active-text");
    } else {
        sliderImgs[sliderImgs.length - 1].classList.add("active-photo");
        sliderText[sliderText.length - 1].classList.add("active-text");
    }
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);




//hamburger menu toogle
const hamb = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav__nav-list");
const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");




hamb.addEventListener("click", () => {
    navList.classList.toggle("menu-open");
    nav.classList.toggle("navbar-bg");
    hamb.classList.toggle("open");
    openHamburger();




})


function openHamburger() {
    if (hamb.classList.contains("open")) {
        menuBtn.src = "images/icon-close.svg";
    } else {
        menuBtn.src = "images/icon-hamburger.svg";
    }

}