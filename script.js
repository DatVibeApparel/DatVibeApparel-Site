// ====== NAV FADE-IN ======
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    nav.classList.add('visible');
});

// ====== HAMBURGER MENU TOGGLE ======
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('ul.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// ====== FEATURED MARQUEE ======
const marqueeTrack = document.querySelector('.marquee-track');
const marqueeItems = document.querySelectorAll('.marquee-item');

if(marqueeTrack && marqueeItems.length > 0) {
    // Pause on hover
    document.querySelector('.featured-marquee').addEventListener('mouseenter', () => {
        marqueeTrack.style.animationPlayState = 'paused';
    });
    document.querySelector('.featured-marquee').addEventListener('mouseleave', () => {
        marqueeTrack.style.animationPlayState = 'running';
    });

    // Click item to scale
    marqueeItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active from others
            marqueeItems.forEach(i => i.classList.remove('active'));
            // Add active to clicked item
            item.classList.add('active');
        });
    });
}
