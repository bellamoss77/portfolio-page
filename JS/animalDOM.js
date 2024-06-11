document.addEventListener('DOMContentLoaded', () => {
    galleryContainer = document.getElementById('container');

    const images = [{
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/Apollo_1.png?raw=true',
        alt: 'dog',
        caption: 'Apollo Smiles - Central Virginia, Spring 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/Hikes-Late-May24_13.png?raw=true',
        alt: 'geese',
        caption: 'Fine Formation - Central Virginia, Late May 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/IMG_0385%20copy.jpg?raw=true',
        alt: 'dog',
        caption: 'Thoughtful Athena - Central Virgina, Late Winter 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/IMG_0639.JPG?raw=true',
        alt: 'dog',
        caption: 'Stoic - Central Virginia, Spring 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/IMG_0671.JPG?raw=true',
        alt: 'dog',
        caption: 'Watchful Eye - Central Virginia, Late Winter 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/JRSP_May-31-24_10.png?raw=true',
        alt: 'dog',
        caption: 'Watery Wanderings - Central Virginia, Early Summer 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/Geese.png?raw=true',
        alt: 'geese',
        caption: 'Flock Festivities - Central Virginia, Late May 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/JRSP_May-31-24_22.png?raw=true',
        alt: 'dog',
        caption: 'Sunset Serenity - Central Virginia, Early Summer 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/May-15-24_7.png?raw=true',
        alt: 'vulture',
        caption: 'Majestic Macabre - Central Virginia, Late Spring 2024'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/ANIMALS/blueBird.png?raw=true',
        alt: 'Bluebird',
        caption: 'Blue Morning - Central Virginia, Late Spring 2024'
        }
    ]

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
            cardImg.appendChild(linkEl);
            card.appendChild(cardImg);
            galleryContainer.appendChild(card);
        })
    }
    generateGalleryCards();
})