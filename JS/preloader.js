function preloadImages(imgURLs, callback) {
    let loadedImagesCount = 0;
    const totalImgs = imgURLs.length;

    function imageLoaded() {
        loadedImagesCount++;
        if (loadedImagesCount === totalImgs && typeof callback === 'function') {
            callback();
        }
    }

    for (let i = 0; i < totalImgs; i++) {
        const img = new Image();
        img.src = imgURLs[i];
        img.onload = imageLoaded;
        img.onerror = imageLoaded;
    }
}