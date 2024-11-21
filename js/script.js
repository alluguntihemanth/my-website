document.addEventListener("DOMContentLoaded", function () {
    // Initialize flip clock here (you can use any flip-clock library)
    setInterval(() => {
        const clock = document.getElementById("clock");
        const now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
});
