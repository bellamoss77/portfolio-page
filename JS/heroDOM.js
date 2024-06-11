document.addEventListener('DOMContentLoaded', () => {
    const heroImages = [
        {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/skylineSunset1-05.png?raw=true',
            alt: 'sunset',
            caption: 'Landscape',
            link: 'nature.html'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/fleurs_10.png?raw=true',
            alt: 'Iris',
            caption: 'Nature',
            link: 'nature.html'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/IMG_0639.JPG?raw=true',
            alt: 'dog',
            caption: 'Pets',
            link: 'animal.html'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_60.png?raw=true',
            alt: 'graffiti on abandoned hotel',
            caption: 'Ruins',
            link: 'ruins.html'
        }
    ];

    const generateHeroSlides = () => {
        const slider = document.getElementById('slider');

        heroImages.forEach((img, index) => {
            const slideLink = document.createElement('a');
            slideLink.className = 'slide-link';
            slideLink.href = `${img.link}`;

            const slide = document.createElement('div');
            slide.className = 'slide';
            if (index === 0) {
                slide.classList.add('current');
            }
            slide.style.backgroundImage = `url(${img.src})`;
          
            const slideCaption = document.createElement('h1');
            slideCaption.className = 'content';
            slideCaption.innerText = `${img.caption}`;

            slide.appendChild(slideCaption);
            slideLink.appendChild(slide);
            slider.appendChild(slideLink);
        })

        const btnContainer = document.createElement('div');
        btnContainer.className = 'buttons';

        const prevBtn = document.createElement('button');
        prevBtn.id = 'prev';
        prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;

        const nextBtn = document.createElement('button');
        nextBtn.id = 'next';
        nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

        btnContainer.appendChild(prevBtn);
        btnContainer.appendChild(nextBtn);
        slider.appendChild(btnContainer);
    }

    generateHeroSlides();
})