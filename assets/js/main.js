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







