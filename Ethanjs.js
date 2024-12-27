function slideImage(container) {
    const  image1 = container.querySelector('.image1');
    const image2 = container.querySelector('.image2');

    image2.style.left = '0';

    image1.style.transform = 'translateX(-100%)';
}   

function resetImage(container) {
    const image1 = container.querySelector('.image1');
    const image2 = container.querySelector('.image2');

    image2.style.left = '100%';

    image1.style.transform ='translateX(0)';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }