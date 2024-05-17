const images = ["Canadarm.jpg", "Earth.webp", "Mars.avif"];
const imageDir = "../images/heros/";

let currentBackgroundIndex = 0;
let nextBackgroundIndex = 1;

const backgrounds = [
    document.getElementById("heroBackgroundFirst"),
    document.getElementById("heroBackgroundSecond"),
    document.getElementById("heroBackgroundThird")
];

function changeBackground() {
    // Fade out the current background
    const currentBackground = backgrounds[currentBackgroundIndex];
    currentBackground.classList.remove('fadeInAnimation');
    currentBackground.classList.add('fadeOutAnimation');

    // Set the new image for the next background
    const nextBackground = backgrounds[nextBackgroundIndex];
    nextBackground.style.backgroundImage = `linear-gradient(0deg, var(--bs-body-bg), rgba(255,255,255,0)), url(${imageDir}${images[nextBackgroundIndex]})`;

    // Fade in the next background
    nextBackground.classList.remove('fadeOutAnimation');
    nextBackground.classList.add('fadeInAnimation');

    // Update the current and next background indices
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    nextBackgroundIndex = (nextBackgroundIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000);