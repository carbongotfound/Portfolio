// ESP Wallhack Logic
const espToggle = document.getElementById('esp-toggle');
const hiddenData = document.getElementById('hidden-data');

espToggle.addEventListener('change', () => {
    if(espToggle.checked) {
        hiddenData.classList.remove('blurred');
    } else {
        hiddenData.classList.add('blurred');
    }
});

// Terminal Data
const data = {
    roblox_py: `
> [MODULE] Game_Automation_External
> [LANG] Python 3.12
> [STATUS] Undetectable / Heuristic
--------------------------------------------------
- Automated script logic via external memory/pixel monitoring.
- Removes manual labor from gameplay loops.
- Self-taught architecture designed to mimic human 
  input to bypass server-side flags.
--------------------------------------------------
[DONE] Execution Complete.`,

    ai_agent: `
> [MODULE] AI_Augmentation_Core
> [RELATION] Human-AI Partnership
> [STATUS] High Sensitivity
--------------------------------------------------
- Workflow optimization using Large Language Models.
- Turning vision into Pythonic reality 10x faster.
- Focus: Turning complex manual tasks into 
  "one-click" autonomous scripts.
--------------------------------------------------
[DONE] Neural Link Stable.`
};

function runCommand(key) {
    const log = document.getElementById('output-log');
    log.innerHTML = "> INITIATING RUNTIME...";
    let i = 0;
    const text = data[key];

    setTimeout(() => {
        log.innerHTML = "";
        function type() {
            if (i < text.length) {
                log.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 5);
                window.scrollTo(0, document.body.scrollHeight);
            }
        }
        type();
    }, 500);
}

// Glitch effect on name
const letters = "ABCDEFGHIKLMNOPQRSTVXYZ0123456789";
document.querySelector(".glitch").onmouseover = event => {
    let iteration = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) return event.target.dataset.text[index];
                return letters[Math.floor(Math.random() * 33)];
            })
            .join("");
        if(iteration >= event.target.dataset.text.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 30);
};
