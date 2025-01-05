// Set time in Chennai (India)
let options = {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};
let formatter = new Intl.DateTimeFormat([], options);

// Set time dynamically
setInterval(() => {
    document.querySelector("#time").innerText = formatter.format(new Date());
}, 1000);
