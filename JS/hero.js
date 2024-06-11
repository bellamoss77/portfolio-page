document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const auto = false;
    const intervalTime = 5000;
    let slideInterval;

    const nextSlide = () => {
        const current = document.querySelector('.slide.current');
        current.classList.remove('current');
        if (current.parentElement.nextElementSibling && current.parentElement.nextElementSibling.querySelector('.slide')) {
            current.parentElement.nextElementSibling.querySelector('.slide').classList.add('current');
        } else {
            slides[0].classList.add('current');
        }
    }

    const prevSlide = () => {
        const current = document.querySelector('.slide.current');
        current.classList.remove('current');
        if (current.parentElement.previousElementSibling && current.parentElement.previousElementSibling.querySelector('.slide')) {
            current.parentElement.previousElementSibling.querySelector('.slide').classList.add('current');
        } else {
            slides[slides.length - 1].classList.add('current');
        }
    }

    nextBtn.addEventListener('click', (e) => {
        nextSlide();
    })
    prevBtn.addEventListener('click', (e) => {
        prevSlide();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    })

    if (auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})
