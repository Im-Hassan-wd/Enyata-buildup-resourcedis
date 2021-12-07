//selecting dom elements
const audio = document.querySelector("audio");
const countdown = () => {
    const future = new Date('Dec 25, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = future - now;

    //getting time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the time
    const dayText = Math.floor(gap / day);
    const hourText = Math.floor((gap % day) / hour);
    const minuteText = Math.floor((gap % hour) / minute);
    const secondText = Math.floor((gap % minute) / second);

    document.querySelector('.day').textContent = dayText;
    document.querySelector('.hour').textContent = hourText;
    document.querySelector('.minute').textContent = minuteText;
    document.querySelector('.second').textContent = secondText;
}

setInterval(countdown, 1000);

// const playAudio = (audio) => {
//     if(audio.paused){
//         // audio.play();
//         console.log(audio);
//     }
// }

// window.addEventListener("DOMContentLoaded", function() {
//     playAudio(audio);
// });