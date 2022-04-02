// ============================== NAV BAR SCROLL ==============================

const nav = document.querySelector("nav");

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}



// ======================== MULTI STEP BAR & FORMULARY ========================

const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

const multiStepBar = document.querySelector("[data-multi-step-bar]");
const barSteps = [...multiStepBar.querySelectorAll("[data-step-bar]")];


let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active");
});


if (currentStep < 0) {
    currentStep = 0;
    formSteps[currentStep].classList.add("active");
    barSteps[currentStep].classList.add("active");
}

multiStepForm.addEventListener("click", e => {
    let incrementor;
    if (e.target.matches("[data-next]")) {
        incrementor = 1;
    } else if (e.target.matches("[data-prev]")) {
        incrementor = -1;
    }

    if (incrementor == null) return;
    
    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every(input => input.reportValidity());
    if (allValid) {
        currentStep += incrementor;
        showCurrentStep();
    }
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
        
    })
    barSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
        step.classList.toggle("completed", index < currentStep);
        console.log(step);
    })
}

