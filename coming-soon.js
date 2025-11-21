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
