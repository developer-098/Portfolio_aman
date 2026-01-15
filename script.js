const toggleBtn = document.getElementById("themeToggle");

// List of section IDs to update backgrounds
const sections = ["#home", "#about", "#skills", "#projects", "#services", "#blog", "#contact"];

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");

    toggleBtn.textContent = isLight ? "🌞" : "🌙";
    if (isLight) {
        toggleBtn.style.background = "var(--card)";
        toggleBtn.style.borderColor = "var(--primary)";
        toggleBtn.style.color = "var(--text)";
    } else {
        toggleBtn.style.background = "rgba(15, 11, 29, 0.9)";
        toggleBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
        toggleBtn.style.color = "var(--text)";
    }

    sections.forEach(sectionId => {
        const section = document.querySelector(sectionId);
        if (section) {
            if (isLight) {
                section.style.background = "var(--bg) ";
                const inputs = document.querySelectorAll(
                    "#contactForm input, #contactForm textarea"
                );
                // const navparent = document.querySelector(".nav-parent");
                // navparent.style.background="var(--bg)";
                inputs.forEach(el => {
                    el.style.border = "1px solid black";

                });

            } else {
                section.style.background = "linear-gradient(135deg, var(--bg) 0%, rgba(15, 11, 29, 0.9) 100%)";
                const inputs = document.querySelectorAll(
                    "#contactForm input, #contactForm textarea"
                );
                inputs.forEach(el => {
                    el.style.border = "1px solid rgba(255, 255, 255, 0.2);";

                });
            }
        }
    });
});


const text = "I build real-world web apps, not just projects.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}
typeEffect();