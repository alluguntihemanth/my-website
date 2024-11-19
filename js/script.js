let options = {
    timeZone: 'Asia/Kolkata', 
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
},
formatter = new Intl.DateTimeFormat([], options);

setInterval(
    () => {
        document.querySelector("#time").innerText = formatter.format(new Date());
    },
1000);
