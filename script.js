// ======================================================
// Harelea Rent a Car
// script.js
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // Header Scroll
    // ==============================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // ==============================
    // Hamburger
    // ==============================

const language = document.querySelector(".language");
const languageBtn = language?.querySelector("button");

if (languageBtn) {

    languageBtn.addEventListener("click", (e) => {

        e.stopPropagation();

language.classList.toggle("open");

languageBtn.setAttribute(
    "aria-expanded",
    language.classList.contains("open")
);

    });

    document.addEventListener("click", () => {

language.classList.remove("open");
languageBtn.setAttribute("aria-expanded","false");

    });

}

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".mobile-nav");

    if (hamburger && nav) {

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

        nav.querySelectorAll("a").forEach(link => {

link.addEventListener("click", () => {

    hamburger.classList.remove("active");
    nav.classList.remove("active");

    document.body.classList.remove("menu-open");

});

        });

    }




    // ==============================
    // Fade Animation
    // ==============================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

    entry.target.classList.add("show");

    observer.unobserve(entry.target);

}

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(".fade-up").forEach(el => {

        observer.observe(el);

    });


    // ==============================
    // Page Top
    // ==============================

const pageTop = document.querySelector(".back-top");

    if (pageTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                pageTop.classList.add("show");

            } else {

                pageTop.classList.remove("show");

            }

        });

        pageTop.addEventListener("click", e => {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    // ==============================
    // Smooth Scroll
    // ==============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });


    // ==============================
    // Current Year
    // ==============================

    const year = document.querySelector("#year");

    if(year){

        year.textContent = new Date().getFullYear();

    }


    // ==============================
    // Lazy Image Fade
    // ==============================

    document.querySelectorAll("img").forEach(img => {

        if(img.complete){
    img.classList.add("loaded");
}else{
    img.addEventListener("load",()=>{
        img.classList.add("loaded");
    });
}

});

         
    // ==============================
    // Button Ripple
    // ==============================

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            ripple.className = "ripple";

            ripple.style.left = e.clientX - rect.left + "px";

            ripple.style.top = e.clientY - rect.top + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            },600);

        });

    });


    // ==============================
    // Loading Complete
    // ==============================

    document.body.classList.add("loaded");

});