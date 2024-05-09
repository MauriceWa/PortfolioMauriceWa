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

const bioKeywords = [
    "Boxer.",
    "Hard Worker.",
    "Coach.",
    "Fitness enthusiast.",
    "Software Developer."
];

let currentPhrase = 0;
let currentCharacter = 0;
let currentBioKeyword = 0;
let currentBioCharacter = 0;

let typeText = document.getElementById('typeText');
let bioText = document.getElementById('bioText');
let cursor = document.querySelector('.cursor');
let bioTypingStarted = false;

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

function typeBio() {
    if (currentBioCharacter < bioKeywords[currentBioKeyword].length) {
        bioText.textContent += bioKeywords[currentBioKeyword].charAt(currentBioCharacter);
        currentBioCharacter++;
        setTimeout(typeBio, 80);
    } else {
        if (currentBioKeyword < bioKeywords.length - 1) {
            setTimeout(eraseBio, 2000);
        }
    }
}

function eraseBio() {
    if (currentBioCharacter > 0) {
        bioText.textContent = bioKeywords[currentBioKeyword].substring(0, currentBioCharacter - 1);
        currentBioCharacter--;
        setTimeout(eraseBio, 100);
    } else {
        currentBioKeyword++;
        currentBioCharacter = 0;
        setTimeout(typeBio, 200);
    }
}

function startBioTyping() {
    if (!bioTypingStarted) {
        bioTypingStarted = true;
        typeBio();
    }
}

setTimeout(type, 200);

function openBio() { document.getElementById('bio').style.display = 'block'; }
function closeBio() { document.getElementById('bio').style.display = 'none'; }
