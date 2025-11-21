// ====== NAV FADE-IN ======
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    nav.classList.add('visible');

    // ====== HAMBURGER MENU TOGGLE ======
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('ul.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

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
});

// Set launch date (YYYY, MM-1, DD, HH, MM, SS)
const launchDate = new Date(2025, 11, 31, 12, 0, 0).getTime(); // Example: Dec 31, 2025

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if(distance < 0){
        daysEl.innerText = '00';
        hoursEl.innerText = '00';
        minutesEl.innerText = '00';
        secondsEl.innerText = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days.toString().padStart(2,'0');
    hoursEl.innerText = hours.toString().padStart(2,'0');
    minutesEl.innerText = minutes.toString().padStart(2,'0');
    secondsEl.innerText = seconds.toString().padStart(2,'0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
