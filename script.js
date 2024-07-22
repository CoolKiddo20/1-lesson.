function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    
    const timeString = `
        <div>Year: ${year}</div>
        <div>Month: ${month}</div>
        <div>Day: ${day}</div>
        <div>Hours: ${hours}</div>
        <div>Minutes: ${minutes}</div>
        <div>Seconds: ${seconds}</div>
        <div>Milliseconds: ${milliseconds}</div>
    `;
    
    document.getElementById('time').innerHTML = timeString;
}

setInterval(updateTime, 1);
