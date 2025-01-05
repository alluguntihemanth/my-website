document.addEventListener("DOMContentLoaded", function() {
    let options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    let formatter = new Intl.DateTimeFormat([], options);

    setInterval(() => {
        document.querySelector("#timezone").innerText = formatter.format(new Date());
    }, 1000);
});

