const clicked = () => {
    let userInput = document.getElementById("userInput").value;
    console.log(userInput);
    let time = resolveTime();
    let hours = new Date().getHours();
    let content;

    if (hours >= 5 && hours < 12) {
        content = "Good morning!";
    } else if (hours >= 12 && hours < 16) {
        content = "Good afternoon!";
    } else if (hours >= 16 && hours < 20) {
        content = "Good evening!";
    } else {
        content = "Good night!";
    }
    displayTime(content, userInput, time);
    document.getElementById("userInput").value = null;

}

let displayTime = (content, userInput, time) => {
    document.getElementById("content").textContent = `${content} ${userInput}, it is ${time}`;
}

const resolveTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    let hoursDisplay = hours % 12 || 12; // Convert 0-hour (midnight) to 12
    hoursDisplay = hoursDisplay < 10 ? `0${hoursDisplay}` : hoursDisplay;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hoursDisplay}:${minutes}:${seconds} ${ampm}`;
}
