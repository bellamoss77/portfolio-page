document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('container');
    const images = [
        {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_19.png?raw=true',
            alt: 'restaurant ruins',
            caption: 'Cold Collapse - Old Howard Johnson Restaurant, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_23.png?raw=true',
            alt: 'restaurant ruins',
            caption: 'Foliage Framing - Old Howard Johnson Restaurant, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_24.png?raw=true',
            alt: 'inn ruins',
            caption: 'Skybound Swallowing - The Inn at Afton, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_40.png?raw=true',
            alt: 'inn ruins',
            caption: 'Back to Nature - The Inn at Afton, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_60.png?raw=true',
            alt: 'graffiti on hotel ruins',
            caption: 'Grafitti Sunset - Old Holiday Inn,  Afton, Virginia, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_63.png?raw=true',
            alt: 'abandoned hotel',
            caption: 'Emtpy Entrance - Old Holiday Inn,  Afton, Virginia, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_66.png?raw=true',
            alt: 'flowers in front of abandoned inn at afton',
            caption: 'Rebirth - The Inn at Afton, April 2024'
        }, {
            src: 'https://github.com/bellamoss77/portfolio-page/blob/main/RUINS/abandoned-hotel_87.png?raw=true',
            alt: 'abandoned hotel',
            caption: 'Eerie Echoes - Old Holiday Inn,  Afton, Virginia, April 2024'
        }
    ];

    const generateGalleryCards = () => {
        images.forEach(img => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardImgContainer = document.createElement('div');
            cardImgContainer.className = 'card-img';

            const linkEl = document.createElement('a');
            linkEl.href = `${img.src}`;
            linkEl.setAttribute('data-fancybox', 'gallery');
            linkEl.setAttribute('data-caption', `${img.caption}`);

            const imgEl = document.createElement('img');
            imgEl.src = img.src;
            imgEl.alt = img.alt;

            linkEl.appendChild(imgEl);
            cardImgContainer.appendChild(linkEl);
            card.appendChild(cardImgContainer);
            galleryContainer.appendChild(card);
        })
    }
    generateGalleryCards();
})