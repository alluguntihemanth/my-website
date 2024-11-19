document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
        document.getElementById("time").innerText = formattedTime;
    }

    updateTime();
    setInterval(updateTime, 60000); // Update time every minute
});

