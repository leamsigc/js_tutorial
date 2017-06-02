var slideIndex = 1;
var next = document.getElementById('next');
var prev = document.getElementById('prev');

function showSlides(n) {
    var slides = document.getElementsByClassName('item');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
    'use strict';
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
showSlides(slideIndex);

prev.addEventListener("click", function () {
    plusSlides(-1);
});
next.addEventListener("click", function () {
    plusSlides(1);
});
