const phrases = [
    "Enhancing Humanity Through Technology.",
    "Innovating for a Better Tomorrow.",
    "Empowering Change with Advanced Technology.",
    "Driving Excellence in Tech.",
    "Creating Impactful User Experiences.",
    "Leading the Revolution in Technology and Design.",
    "Building Smarter Solutions for Complex Problems.",
    "Advancing Human Potential with AI.",
    "Crafting the Future of Digital Solutions."

];

let currentPhrase = 0;
let currentCharacter = 0;
let typeText = document.getElementById('typeText');
let cursor = document.querySelector('.cursor');

function type() {
    if (currentCharacter < phrases[currentPhrase].length) {
        typeText.textContent += phrases[currentPhrase].charAt(currentCharacter);
        currentCharacter++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (currentCharacter > 0) {
        typeText.textContent = phrases[currentPhrase].substring(0, currentCharacter - 1);
        currentCharacter--;
        setTimeout(erase, 100);
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 200);
    }
}

setTimeout(type, 200);
