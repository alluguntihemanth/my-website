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
