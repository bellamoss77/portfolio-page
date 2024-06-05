document.addEventListener('DOMContentLoaded', () => {
    const heroImages = [
        {
            src: 'LANDSCAPE/skylineSunset1-05.png',
            alt: 'sunset',
            caption: 'Landscape'
        }, {
            src: 'LANDSCAPE/fleurs_10.png',
            alt: 'Iris',
            caption: 'Nature'
        }, {
            src: 'ANIMALS/IMG_0639.JPG',
            alt: 'dog',
            caption: 'Pets'
        }, {
            src: 'RUINS/abandoned-hotel_60.png',
            alt: 'graffiti on abandoned hotel',
            caption: 'Ruins'
        }
    ];

    const container = document.getElementById('heroContainer');

    const slider = document.createElement('div');
    slider.className = 'slider';


    const btnContainer = document.createElement('div');
    btnContainer.className = 'slider__arrows';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'slider__arrows--left';
    prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'slider__arrows--right';
    nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

    const generateHeroSlides = () => {
        heroImages.forEach(img => {
            const sliderItem = document.createElement('div');
            sliderItem.className = 'slider__item';
            sliderItem.style.backgroundImage = `url(${img.src})`;
            sliderItem.style.backgroundSize = 'cover';
            //sliderItem.style.backgroundRepeat = 'no-repeat';
            sliderItem.style.backgroundPosition = 'center center';

            const slideCaption = document.createElement('p');
            slideCaption.className = 'slider__text';
            slideCaption.innerText = `${img.caption}`;

            sliderItem.appendChild(slideCaption);
            slider.appendChild(sliderItem);
            slider.appendChild(btnContainer);
            btnContainer.appendChild(prevBtn);
            btnContainer.appendChild(nextBtn);
            container.appendChild(slider);
        })
    }
    generateHeroSlides();
})