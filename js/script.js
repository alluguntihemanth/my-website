document.addEventListener("DOMContentLoaded", function () {
    // Initialize flip clock here (you can use any flip-clock library or basic time display)
    setInterval(() => {
        const clock = document.getElementById("flip-clock");
        const now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
});
