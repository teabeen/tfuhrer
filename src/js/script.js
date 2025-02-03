const text = "Hi, I'm Tom";
let index = 0;
const speed = 100;

function typeEffect() {
    document.getElementById("intro-text").innerHTML = text.slice(0, index) + '<span id="wave">👋</span>';
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, speed);
    } else {
        // When typing finishes, show and animate the wave
        const waveEmoji = document.getElementById("wave");
        waveEmoji.style.opacity = "1";
        waveEmoji.style.animation = "wave 1s ease-in-out 2"; /* Runs twice */
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
