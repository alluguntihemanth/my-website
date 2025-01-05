<<<<<<< HEAD
// script.js

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true, 
        timeZone: 'America/Denver' // Salt Lake City timezone
    };
    
    const timeString = now.toLocaleTimeString('en-US', options) + ' MDT';
    timeElement.textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
=======
document.addEventListener("DOMContentLoaded", function () {
    // Initialize flip clock here (you can use any flip-clock library or basic time display)
    setInterval(() => {
        const clock = document.getElementById("flip-clock");
        const now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
});
>>>>>>> d697b69fe08245abd09ccc8a0dc27e94de79b8da
