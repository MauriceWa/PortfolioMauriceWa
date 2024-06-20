document.addEventListener('DOMContentLoaded', function() {
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
        "Dedicated professional.",
        "Mentor.",
        "Health and fitness advocate.",
        "Boxing enthusiast.",
        "Software developer."
    ];

    let currentPhrase = 0;
    let currentCharacter = 0;
    let currentBioKeyword = 0;
    let currentBioCharacter = 0;

    const typeText = document.getElementById('ContactFormPersonal');
    const bioText = document.getElementById('bioText');
    const cursor = document.querySelector('.cursor');
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
            setTimeout(typeBio, 30);
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
            setTimeout(eraseBio, 50);
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

    window.startBioTyping = startBioTyping;
});
