let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nulsel = document.querySelector('.nulsel');
let main = document.querySelector('.main');

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

function getMaxTitleSize() {
    return Math.min(100, window.innerWidth * 0.22);
}

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    menuToggle.setAttribute(
        'aria-expanded',
        navMenu.classList.contains('open')
    );
});

navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

window.onscroll = function () {
    let value = scrollY;
    let maxSize = getMaxTitleSize();

    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3.4 + 'px';
    nulsel.style.fontSize = value + 'px';

    if (scrollY >= 100) {
        nulsel.style.fontSize = maxSize + 'px';
        nulsel.style.position = 'fixed';

        if (scrollY >= 500) {
            nulsel.style.display = 'none';
        } else {
            nulsel.style.display = 'block';
        }
    }

    if (scrollY >= 150) {
        main.style.background =
            'linear-gradient(hsl(187, 100%, 25%), hsl(195, 100%, 17%))';
    } else {
        main.style.background =
            'linear-gradient(hsl(303, 100%, 7%), hsl(271, 100%, 20%))';
    }
};

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});
