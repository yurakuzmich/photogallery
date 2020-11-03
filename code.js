document.addEventListener('click', documentHandler);

function documentHandler(e) {
    if(e.target.classList.contains('thumb__img')) {
        swapImages(e);
    }
}

function swapImages(e) {
    let imageToSwapName = getImgName(e.target.src);
    let swappedImage =  document.querySelector('.photo__img');
    
    let swappedImageName = getImgName(swappedImage.src);
    swappedImage.src = './images/' + imageToSwapName;
    e.target.src = './images/' + swappedImageName;
};

function getImgName(str) {
    let position = str.lastIndexOf('/') + 1;
    return str.slice(position);
}