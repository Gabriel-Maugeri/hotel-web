// ============================== NAV BAR SCROLL ==============================

const nav = document.querySelector("nav");

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 25 || document.documentElement.scrollTop >= 25) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}


// ================================ MENU REVEAL ===============================

const menuBtn = document.querySelector(".nav-menu_btn");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu-btn");

menuBtn.addEventListener("click", e => {
    menu.classList.toggle("active");
});


menuLink.forEach(element => {
    element.addEventListener("click", e => {
        menu.classList.toggle("active");
    });
});



// ============================== SERVICES REVEAL =============================

const restautantBtn = document.querySelectorAll(".restaurant__list-btn")
const restaurantList = document.querySelector(".services-list");
const restaurantInfo = document.querySelector(".services-info")

restautantBtn.forEach(element => {
    element.addEventListener("click", e => {
        restaurantList.classList.toggle("active");
        restaurantInfo.classList.toggle("active");
    });
});