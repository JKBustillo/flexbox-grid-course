document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero');
    
    let i = 1;
    let time = 0;

    const images = ['arriba.jpg', 'arriba2.jpg'];
    
    setInterval(() => {
        if (time === 40) {
            time = 0;
            heroImage.style.backgroundImage = `url(img/${images[i]})`;
            i === images.length - 1 ? i = 0 : i++;
        }

        heroImage.style.backgroundPositionY = `-${time}px`;

        time++;
    }, 100);

});

const floatingBtn = document.querySelector('.floating-btn');

floatingBtn.addEventListener('click', e => {
    e.preventDefault();

    const footer = document.querySelector('.footer');

    if( footer.classList.contains('active') ) {
        footer.classList.remove('active');
        floatingBtn.classList.remove('active');
        floatingBtn.innerText = 'Language and others';
    } else {
        footer.classList.add('active');
        floatingBtn.classList.add('active');
        floatingBtn.innerText = 'X Close';
    }
});