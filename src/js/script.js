window.addEventListener('DOMContentLoaded', () => {

    // menu

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menuOverlay = document.querySelector('.overlay'),
          menuLine = document.querySelectorAll('.hamburger__line');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu__show');
        menuOverlay.classList.toggle('overlay_show');
        menuLine.forEach( item => {
            item.classList.toggle('hamburger__line_close');
        });
    });

    // divider

    const divider = document.querySelector('.divider');

    window.addEventListener('scroll', () => {
        let top = divider.getBoundingClientRect().top;
        if (top < window.innerHeight && top > 0) {
            divider.classList.add('divider_anim');
        } else {
            divider.classList.remove('divider_anim'); 
        }
    });
});