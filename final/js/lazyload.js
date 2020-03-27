const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargi: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute ('data-src'));
    image.onload = () => {image.removeAttribute ('data-src');};
};

if('intersectionOberver' in window) {
    const imgOvserver = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.targe);
                imgObserver.unobserve(item.target);
            }
        });
    }, imageoptions);

imgagesToLoad.forEach((img) => {
    imgObserver.observer(img)
    });
}
else {
    imagesToLoad.forEach((img) => { 
        loadImages(img);
    });
}