let images = [];

document.getElementById('increaseButton').addEventListener('click', function () {
    if (images.length > 0) {
        let lastImage = images[images.length - 1];
        let currentWidth = lastImage.offsetWidth;
        lastImage.style.width = (currentWidth * 1.1) + 'px';
    }
});

document.getElementById('decreaseButton').addEventListener('click', function () {
    if (images.length > 0) {
        let lastImage = images[images.length - 1];
        let currentWidth = lastImage.offsetWidth;
        lastImage.style.width = (currentWidth / 1.1) + 'px';
    }
});

document.getElementById('removeButton').addEventListener('click', function () {
    if (images.length > 0) {
        let lastImage = images.pop();
        lastImage.remove();
    }
});

document.getElementById('addButton').addEventListener('click', function () {
    let newImage = document.createElement('img');
    newImage.src = 'https://34travel.me/media/upload/images/2018/fabruary/kiev-sverhu/7c632743-9a05-4f4a-8056-7c99a3719dbf.jpg';
    newImage.alt = 'Київ';
    newImage.style.width = '25%';
    newImage.style.height = 'auto';
    document.querySelector('a').appendChild(newImage);
    images.push(newImage);
});
