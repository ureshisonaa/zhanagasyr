/* ==================================================
   ZHANAGASYR
   SCRIPT.JS
================================================== */

/* ================= GOOGLE FORM ================= */

const GOOGLE_FORM_URL = "PASTE_GOOGLE_FORM_LINK_HERE";

/* ================= MOBILE MENU ================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

/* Закрытие мобильного меню при клике на ссылку */
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

/* ================= FORM BUTTONS ================= */

const formButtons = document.querySelectorAll(".form-btn");

formButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(GOOGLE_FORM_URL, "_blank");
    });
});

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

/* ================= STICKY HEADER EFFECT ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.12)";
    } else {
        header.style.boxShadow = "none";
    }
});

/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".card, .case-card, .section-header").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* ================= ADD ANIMATION STYLES ================= */

const style = document.createElement("style");

style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}
`;

document.head.appendChild(style);