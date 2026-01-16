// 1. ESP / Wallhack Logic
const espToggle = document.getElementById('esp-toggle');
const hiddenData = document.getElementById('hidden-data');
const instructionText = document.querySelector('.instruction');

espToggle.addEventListener('change', () => {
    if (espToggle.checked) {
        hiddenData.classList.remove('blurred');
        instructionText.innerText = "[✓] ESP ENABLED. DATA DECRYPTED.";
        instructionText.style.color = "#fff";
        instructionText.style.animation = "none";
    } else {
        hiddenData.classList.add('blurred');
        instructionText.innerText = "[!] ENABLE ESP MODE IN TOP RIGHT TO DECRYPT DATA";
        instructionText.style.color = "#444";
        instructionText.style.animation = "flash 2s infinite";
    }
});

// 2. Terminal Logic
const outputLog = document.getElementById('output-log');

const data = {
    roblox_bot: `
> INITIATING ROBLOX SCRIPT...
> TARGET: GAME_ENGINE_V3
> STATUS: EXTERNAL / UNDETECTED
--------------------------------
Created a high-efficiency Lua bot leveraging external
script execution. It automates farming loops and 
evades anti-cheat detection using heuristic randomization.
[SUCCESS]
    `,
    ai_workflow: `
> LOADING PYTHON ENVIRONMENT...
> IMPORTING OPENAI, TORCH
--------------------------------
Designed a desktop assistant that monitors screen content
and triggers automation based on visual cues.
Status: In Development.
Goal: 0% Human Interaction required for data entry.
    `,
    contact_info: `
> READING CONTACT.TXT...
--------------------------------
DISCORD: Carbon#0000 (Example)
GITHUB: github.com/carbon
EMAIL: [REDACTED]
    `
};

function runCommand(commandKey) {
    outputLog.innerHTML = ""; // Clear previous
    const text = data[commandKey];
    let i = 0;

    // Typing effect
    function typeWriter() {
        if (i < text.length) {
            outputLog.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 10); // Speed of typing
        }
    }
    typeWriter();
}

// 3. Glitch Effect on Title Hover
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
document.querySelector('.glitch').onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iterations) return event.target.dataset.text[index];
                return letters[Math.floor(Math.random() * 36)];
            })
            .join("");

        if (iterations >= event.target.dataset.text.length) clearInterval(interval);
        iterations += 1 / 3;
    }, 30);
};