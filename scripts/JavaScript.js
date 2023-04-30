// BURGER-MENU
var header = document.querySelector('#header');
const navBurgerIcon = document.querySelector('#nav_burger_icon');
const navBurger = document.querySelector('#nav_burger');
const navLinks = document.querySelector('#nav').cloneNode(1);

navBurgerIcon.addEventListener('click', hambHandler);
function hambHandler(e) {
    e.preventDefault();
    navBurger.classList.toggle('open');
    navBurgerIcon.classList.toggle('active');
    navBurger.appendChild(navLinks);
}

// HIDE BURGER-MENU ON SCROLL
var previousScrollPosition = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 70) header.classList.add('header_active');
    else header.classList.remove('header_active');

    if (
        previousScrollPosition > currentScrollPosition ||
        previousScrollPosition < currentScrollPosition
    ) {
        navBurger.classList.remove('open');
        navBurgerIcon.classList.remove('active');
    }
    previousScrollPosition = currentScrollPosition;
};

// SLIDER
var screenWidth = window.screen.width;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i, j;
    let slides = document.getElementsByClassName('pancakes_slider_item');

    if (screenWidth > 768) {
        slides = sliceIntoChunks(slides, 3);

        if (n < 1) {
            slideIndex = slides.length;
        }

        if (n > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < slides.length; i++) {
            for (j = 0; j < 3; j++) {
                slides[i][j].style.display = 'none';
            }
        }

        for (j = 0; j < 3; j++) {
            slides[slideIndex - 1][j].style.display = 'block';
        }

        function sliceIntoChunks(slides, chunkSize) {
            const slidesRes = Array.from(slides);
            const result = [];
            for (i = 0; i < slidesRes.length; i += chunkSize) {
                const chunk = slidesRes.slice(i, i + chunkSize);
                result.push(chunk);
            }
            return result;
        }
    } else {
        if (n < 1) {
            slideIndex = slides.length;
        }

        if (n > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'block';
    }
}
