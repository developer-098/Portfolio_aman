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
                inputs.forEach(el => {
                    el.style.border = "1px solid black";

                });

                const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
                navbarTogglerIcon.style.backgroundImage = `
                url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0,0,0,1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;

                const navbarToggler = document.querySelector(".navbar-toggler");
                navbarToggler.style.border = "1px solid black";
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