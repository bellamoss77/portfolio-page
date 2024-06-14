document.addEventListener('DOMContentLoaded', function() {
    const imgURLs = Array.from(document.querySelectorAll('[data-fancybox="gallery"] img')).map(img => img.src);

    preloadImages(imgURLs, function() {
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
                'slideShow',
                'thumbs',
                'zoom', 
                'fullScreen',
                'share',
                'close'
            ],
            loop: false,
            protect: true
        });
    })
})

