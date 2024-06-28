function updateClock(){
    const now = new Date;
    const hours2 = now.getHours().toString().padStart(2, 0);
    const minutes2 = now.getMinutes().toString().padStart(2, 0);
    const seconds2 = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours2}:${minutes2}:${seconds2}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000)