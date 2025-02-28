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

    let deslocamento = -slideIndex * 100;
    slider.style.transform = `translateX(${deslocamento}%)`;
}
