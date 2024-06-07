document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('container');
    const images = [{
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/Hikes-Late-May24_10.png?raw=true',
        alt: 'reflection on lake',
        caption: 'Late May 2024, Central Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/Hikes-Late-May24_6.png?raw=true',
        alt: 'clouds over open field with winding path',
        caption: 'Late May 2024, Central Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/fleurs_10.png?raw=true',
        alt: 'purple iris',
        caption: 'Mid May 2024, Central Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/skylineSunset1-05.png?raw=true',
        alt: 'sunset',
        caption: 'Late April 2024, Blue Ridge Parkway'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/JRSP_June1-24_11.png?raw=true',
        alt: 'seaweed in river',
        caption: 'Early June 2024, James River State Park, Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/JRSP_May-31-24_1.png?raw=true',
        alt: 'wheatgrass',
        caption: 'Late May 2024, James River State Park, Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/JRSP_May-31-24_14.png?raw=true',
        alt: 'reeds in front of marsh',
        caption: 'Late May 2024, James River State Park, Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/JRSP_May-31-24_18.png?raw=true',
        alt: 'purple wildflowers',
        caption: 'Late May 2024, James River State Park, Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/JRSP_May-31-24_26.png?raw=true',
        alt: 'sunset over lake',
        caption: 'Late May 2024, James River State Park, Virginia'
        }, {
        src: 'https://github.com/bellamoss77/portfolio-page/blob/main/LANDSCAPE/skylineSunset1-11.png?raw=true',
        alt: 'sunset from mountain',
        caption: 'Late April 2024, Blue Ridge Parkway'
        }
    ];

    const generateGallery = () => {
        images.forEach(img => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardImg = document.createElement('div');
            cardImg.className = 'card-img';

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
    generateGallery();
})