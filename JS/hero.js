document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const auto = false;
    const intervalTime = 5000;
    let slideInterval;

    const nextSlide = () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add('current');
        } else {
            slides[0].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
    }

    const prevSlide = () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if (current.previousElementSibling) {
            current.previousElementSibling.classList.add('current');
        } else {
            slides[slides.length - 1].classList.add('current')
        }
        setTimeout(() => current.classList.remove('current'));
    }

    nextBtn.addEventListener('click', (e) => {
        nextSlide();
    })
    prevBtn.addEventListener('click', (e) => {
        prevSlide();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            nextSlide();
        } else if (e.key === 'ArrowRight') {
            prevSlide();
        }
    })

    if (auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})