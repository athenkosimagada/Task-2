
const images = document.querySelectorAll('img');

let imageOptions = {};

let obsever = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const image = entry.target;
        const newPath = image.getAttribute('data-src');
        if(newPath) {
            image.src = newPath;
            observer.unobserve(image);
        }
    });
}, imageOptions)

images.forEach(image => {
    if(image.getAttribute('data-src')) {
        obsever.observe(image);
    }
});