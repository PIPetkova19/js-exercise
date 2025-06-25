function digitalClock() {
    const time = new Date();
    let hours = time.getHours().toString().padStart(2, 0);
    let minutes = time.getMinutes().toString().padStart(2, 0);
    let seconds = time.getSeconds().toString().padStart(2, 0);
    let result = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = result;

}
digitalClock();
setInterval(digitalClock, 1000);