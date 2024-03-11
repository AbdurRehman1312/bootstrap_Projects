// AOS.init();


// menu js start
document.querySelector(".navbar").style.background = "#fff";

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.height = '75px';
        document.querySelector(".sizelogo").style.width = '180px';
        document.querySelector(".navbar-light").classList.add("fixed-top");
    } else {
        document.querySelector(".navbar").style.height = 'auto';
        document.querySelector(".sizelogo").style.width = '200px';
    }
}


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// menu js end

// js for TOOLTIP 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))










