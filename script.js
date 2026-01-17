document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Matrix Text Effect
    document.querySelectorAll('.section-title').forEach(header => {
        header.onmouseover = event => {
            let iterations = 0;
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iterations >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }
                iterations += 1 / 3;
            }, 30);
        }
    });

    // === POPUP LOGIC (FIXED REDIRECT) ===
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector(".close");

    // Select all source links
    const sourceLinks = document.querySelectorAll('.source-link');
    
    sourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // CRITICAL: Stop the jump/redirect
            e.preventDefault(); 
            e.stopPropagation();
            
            const imagePath = this.getAttribute('data-src');
            
            // Set image and show modal
            modalImg.src = imagePath;
            modal.style.display = "flex";
            
            // Log to console to debug if needed
            console.log("Opening image: " + imagePath);
        });
    });

    // Close Button Action
    closeBtn.onclick = function() {
        modal.style.display = "none";
        modalImg.src = ""; // Clear src
    }

    // Close if clicking the dark overlay area
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalImg.src = "";
        }
    }
});