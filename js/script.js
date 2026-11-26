document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        reveals.forEach((element) => observer.observe(element));
    } else {
        reveals.forEach((element) => element.classList.add("visible"));
    }

    const heartsContainer = document.getElementById("hearts");
    if (heartsContainer) {
        setInterval(() => {
            const heart = document.createElement("span");
            heart.className = "heart";
            heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.fontSize = `${12 + Math.random() * 18}px`;
            heart.style.animationDuration = `${4 + Math.random() * 4}s`;
            heartsContainer.appendChild(heart);
            heart.addEventListener("animationend", () => heart.remove());
        }, 450);
    }

    const music = document.getElementById("musica");
    const musicButton = document.getElementById("musicBtn");
    if (music && musicButton) {
        musicButton.addEventListener("click", async () => {
            try {
                if (music.paused) {
                    await music.play();
                    musicButton.setAttribute("aria-label", "Pausar música");
                    musicButton.textContent = "❚❚";
                } else {
                    music.pause();
                    musicButton.setAttribute("aria-label", "Ativar música");
                    musicButton.textContent = "♫";
                }
            } catch (error) {
                musicButton.setAttribute("aria-label", "Música indisponível");
            }
        });
    }

    const envelope = document.getElementById("envelope");
    const openLetter = document.getElementById("openLetter");
    if (envelope && openLetter) {
        openLetter.addEventListener("click", () => {
            const isOpen = envelope.classList.toggle("open");
            openLetter.textContent = isOpen ? "Fechar minha carta ♡" : "Abrir minha carta ♡";
        });
    }

    const yesButton = document.getElementById("yesBtn");
    const thinkButton = document.getElementById("thinkBtn");
    const answer = document.getElementById("answer");
    if (yesButton && thinkButton && answer) {
        yesButton.addEventListener("click", () => {
            answer.textContent = "Eu sabia que você faria meu coração feliz! ♡";
        });
        thinkButton.addEventListener("click", () => {
            answer.textContent = "Tudo bem, vamos conversar com calma ♡";
        });
    }
});

function irPara(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}