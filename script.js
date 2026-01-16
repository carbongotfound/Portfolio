// --- CHALLENGE 1: THE BOT ARCHITECTURE (SLIDER) ---
const techSlider = document.getElementById('tech-slider');
const techWrapper = document.getElementById('tech-wrapper');

techSlider.addEventListener('input', (e) => {
    if (e.target.value == 100) {
        techWrapper.querySelector('.locked-content').classList.remove('blurred');
        techWrapper.querySelector('.locked-content').style.opacity = "1";
        techWrapper.querySelector('.challenge-ui').style.display = 'none';
        techWrapper.style.borderStyle = "solid";
    }
});

// --- CHALLENGE 2: SELECTED WORKS (HOLD BUTTON) ---
const holdBtn = document.getElementById('hold-btn');
const projectWrapper = document.getElementById('projects-wrapper');

let holdTimer;
let holdProgress = 0;

holdBtn.addEventListener('mousedown', startHold);
holdBtn.addEventListener('touchstart', startHold);
holdBtn.addEventListener('mouseup', stopHold);
holdBtn.addEventListener('touchend', stopHold);
holdBtn.addEventListener('mouseleave', stopHold);

function startHold() {
    holdTimer = setInterval(() => {
        holdProgress += 2;
        holdBtn.innerText = `AUTHORIZING... ${holdProgress}%`;
        if (holdProgress >= 100) {
            clearInterval(holdTimer);
            projectWrapper.querySelector('.locked-content').classList.remove('blurred');
            projectWrapper.querySelector('.locked-content').style.opacity = "1";
            projectWrapper.querySelector('.challenge-ui').style.display = 'none';
        }
    }, 30);
}

function stopHold() {
    clearInterval(holdTimer);
    if (holdProgress < 100) {
        holdProgress = 0;
        holdBtn.innerText = "HOLD (0%)";
    }
}

// Scramble Text Effect for Headings
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelectorAll('.section-title').forEach(title => {
    title.onmouseover = event => {
        let iteration = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iteration) return event.target.dataset.value[index];
                    return letters[Math.floor(Math.random() * 26)];
                }).join("");
            if(iteration >= event.target.dataset.value.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };
    title.dataset.value = title.innerText;
});
