// script.js
function updateTime() {
    const timeElement = document.getElementById('time');
    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
