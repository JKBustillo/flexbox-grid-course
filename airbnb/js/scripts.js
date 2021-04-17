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