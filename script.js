/* ==========================================
   JOYAL AUGUSTIN X PORTFOLIO
   script.js
========================================== */

/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const text =
        "ServiceNow Certified Application Developer (CAD) | ServiceNow Certified System Administrator (CSA)";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typingElement.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 60);

        }

    }

    typeText();

}

/* ==========================================
   MOBILE MENU
========================================== */

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menu.onclick = () =>{

nav.classList.toggle("active");

};
/* ==========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav.classList.contains("active")) {

            nav.classList.remove("active");

        }

    });

});

/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.querySelector(".scroll-top");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.classList.add("show");

        }

        else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Portfolio Loaded Successfully 🚀");