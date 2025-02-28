let slideIndex = 0;

function mudarSlide(direcao) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    slideIndex += direcao;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

const menuToggle = document.getElementById('darkModeToggle');
    const menuList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('show');
    });